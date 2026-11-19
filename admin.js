import { CLOUD_CONFIG } from './supabase-config.js';
import { configured, getCloudClient } from './cloud-client.js';

const $ = id => document.getElementById(id);
let db = null, user = null, activeItem = null;
let items = [];
let mediaDraft = [];
const categories = {
  photo: [['street','街頭攝影'],['nature','風景攝影'],['portrait','人像攝影'],['details','細節／其他']],
  video: [['film','短片'],['documentary','紀錄影像'],['reel','剪輯／Showreel']],
  project: [['web','網站／互動'],['design','視覺設計'],['3d','3D／建模']]
};
function show(panel) {
  for(const id of ['setupPanel','loginPanel','deniedPanel','editorArea']) $(id).classList.add('hidden');
  $(panel).classList.remove('hidden');
}
function tell(message, type='') {
  const n=$('notice');n.textContent=message;n.className='notice'+(type?' '+type:'');
}
function setLoading(loading) {
  $('saveBtn').disabled=loading;
  $('saveBtn').textContent=loading?'檔案上傳／儲存中…':'儲存作品 / 上傳檔案 ↗';
}
function updateOptions(defaultValue='') {
  const kind=$('kind').value;
  $('category').replaceChildren();
  categories[kind].forEach(([value,label])=>{const opt=document.createElement('option');opt.value=value;opt.textContent=label;$('category').append(opt)});
  if(defaultValue)$('category').value=defaultValue;
  $('extraUploadBox').classList.toggle('is-hidden',kind==='photo');
}
function revokeMediaPreviews(){for(const item of mediaDraft){if(item.preview)URL.revokeObjectURL(item.preview)}}
function clearForm(){
  revokeMediaPreviews();mediaDraft=[];activeItem=null;$('itemForm').reset();$('kind').value='photo';updateOptions();
  $('formHeading').textContent='新增作品';$('saveBtn').textContent='儲存作品 / 上傳檔案 ↗';
  renderMediaDraft();$('title').focus();
}
function mediaType(file){
  const type=(file.type||'').toLowerCase(),ext=extension(file);
  if(['image/jpeg','image/png','image/webp','image/avif'].includes(type)||['jpg','jpeg','png','webp','avif'].includes(ext))return 'image';
  if(['video/mp4','video/webm'].includes(type)||['mp4','webm'].includes(ext))return 'video';
  if(['application/pdf','application/zip','application/x-zip-compressed'].includes(type)||['pdf','zip'].includes(ext))return 'document';
  throw Error('不支援的格式：'+file.name);
}
function addPickedFiles(files, imageOnly){
  try{
    if(mediaDraft.length+files.length>100)throw Error('同一個作品最多 100 個檔案，請分次整理作品。');
    const next=[];
    for(const file of files){
      const type=mediaType(file);
      if(imageOnly&&type!=='image')throw Error('這個欄位只能上傳圖片。');
      const accepted=type==='image' ? ['image/jpeg','image/png','image/webp','image/avif','jpg','jpeg','png','webp','avif'] : type==='video' ? ['video/mp4','video/webm','mp4','webm'] : ['application/pdf','application/zip','application/x-zip-compressed','pdf','zip'];
      validateFile(file,accepted,type==='image'?15:type==='video'?45:10);
      next.push({id:crypto.randomUUID(),type,name:file.name,description:'',url:'',file,preview:type==='image'?URL.createObjectURL(file):'',is_cover:false});
    }
    if(!mediaDraft.some(x=>x.is_cover&&x.type==='image')){const first=next.find(x=>x.type==='image');if(first)first.is_cover=true}
    mediaDraft.push(...next);renderMediaDraft();
  }catch(e){tell(e.message||String(e),'error')}
}
function legacyMedia(item){
  if(Array.isArray(item.media_items)&&item.media_items.length){
    // 舊欄位仍保留，以免已存在的上傳內容因新 schema 而遺失
    return item.media_items.map(m=>({...m,id:m.id||crypto.randomUUID(),description:m.description||'',name:m.name||'作品檔案',is_cover:!!m.is_cover}));
  }
  const result=[];
  if(item.cover_url)result.push({id:crypto.randomUUID(),url:item.cover_url,type:'image',name:'封面照片',description:'',is_cover:true});
  if(item.media_url && item.media_url!==item.cover_url){
    const looksVideo=/\.(mp4|webm)(?:[?#]|$)/i.test(item.media_url);
    result.push({id:crypto.randomUUID(),url:item.media_url,type:looksVideo?'video':'document',name:looksVideo?'影片':'作品附件',description:'',is_cover:false});
  }
  return result;
}
function renderMediaDraft(){
  const host=$('mediaDraft');host.replaceChildren();
  host.append(Object.assign(document.createElement('p'),{className:'file-count',textContent:`本作品 ${mediaDraft.length} 個檔案 · 拖入新檔後，按儲存才會真正上傳`}));
  mediaDraft.forEach((m,i)=>{
    const row=document.createElement('div');row.className='media-item';
    let preview;
    if(m.type==='image'){
      preview=document.createElement('img');preview.src=m.preview||m.url;preview.alt='';preview.loading='lazy';
    }else{preview=document.createElement('span');preview.className='media-placeholder';preview.textContent=m.type==='video'?'VIDEO':'FILE'}
    const fields=document.createElement('div');fields.className='media-item-fields';
    const label=document.createElement('div');label.className='media-item-title';label.textContent=`${i+1}. ${m.name||m.type}`;
    const text=document.createElement('input');text.type='text';text.placeholder='這個檔案的獨立敘述（選填）';text.maxLength=500;text.value=m.description||'';
    text.setAttribute('aria-label',`第 ${i+1} 個檔案的敘述`);text.addEventListener('input',()=>{m.description=text.value});
    const actions=document.createElement('div');actions.className='media-actions';
    const add=(name,click,cl='')=>{const b=document.createElement('button');b.type='button';b.className='mini-btn '+cl;b.textContent=name;b.addEventListener('click',click);actions.append(b)};
    if(m.type==='image')add(m.is_cover?'★ 目前封面':'設成封面',()=>{mediaDraft.forEach(x=>x.is_cover=false);m.is_cover=true;renderMediaDraft()},m.is_cover?'is-cover':'');
    add('↑',()=>{if(i===0)return;[mediaDraft[i-1],mediaDraft[i]]=[mediaDraft[i],mediaDraft[i-1]];renderMediaDraft()});
    add('↓',()=>{if(i===mediaDraft.length-1)return;[mediaDraft[i+1],mediaDraft[i]]=[mediaDraft[i],mediaDraft[i+1]];renderMediaDraft()});
    add('移除',()=>{if(m.preview)URL.revokeObjectURL(m.preview);mediaDraft.splice(i,1);if(m.is_cover){const first=mediaDraft.find(x=>x.type==='image');if(first)first.is_cover=true}renderMediaDraft()});
    fields.append(label,text,actions);
    if(m.file){const pending=document.createElement('span');pending.className='pending';pending.textContent='尚未上傳（儲存作品後會上傳）';fields.append(pending)}
    row.append(preview,fields);host.append(row);
  });
}
function publicUrl(path){return db.storage.from(CLOUD_CONFIG.bucket).getPublicUrl(path).data.publicUrl}
function extension(file){return (file.name.split('.').pop()||'').toLowerCase()}
function validateFile(file, allowed, maxMB) {
  if(!file)return;
  if(!allowed.includes(file.type.toLowerCase()) && !allowed.includes(extension(file)))throw Error('不支援的檔案格式：'+file.name);
  if(file.size>maxMB*1024*1024)throw Error(file.name+' 超過 '+maxMB+' MB 上限。');
}
function isOwner(){return user?.id === CLOUD_CONFIG.ownerUid}
async function uploadOne(file, area, paths) {
  if(!file)return '';
  const path=`${user.id}/${area}/${crypto.randomUUID()}.${extension(file)}`;
  const {error}=await db.storage.from(CLOUD_CONFIG.bucket).upload(path,file,{contentType:file.type,cacheControl:'3600',upsert:false});
  if(error)throw error;
  paths.push(path);return publicUrl(path);
}
function pathFromPublicUrl(url){
  if(!url)return '';
  try{
    const parsed=new URL(url),expected=new URL(CLOUD_CONFIG.url);
    const prefix=`/storage/v1/object/public/${CLOUD_CONFIG.bucket}/`;
    if(parsed.origin!==expected.origin||!parsed.pathname.startsWith(prefix))return '';
    const path=decodeURIComponent(parsed.pathname.slice(prefix.length));
    return path.startsWith(user.id+'/') ? path : '';
  }catch{return ''}
}
async function removeUnusedFiles(urls){
  const paths=urls.map(pathFromPublicUrl).filter(Boolean);
  if(paths.length){const {error}=await db.storage.from(CLOUD_CONFIG.bucket).remove(paths);if(error)console.warn('檔案清理未完成',error)}
}
async function reload(){
  if(!isOwner())return;
  const {data,error}=await db.from('portfolio_items').select('*').order('sort_order',{ascending:false}).order('created_at',{ascending:false});
  if(error){tell('無法取得作品列表：'+error.message,'error');return}
  items=data||[]; renderList();
}
function renderList(){
  const host=$('itemList');host.replaceChildren();
  if(!items.length){const p=document.createElement('p');p.textContent='還沒有雲端作品，從上方新增第一張照片吧。';host.append(p);return}
  for(const item of items){
    const row=document.createElement('article');row.className='entry';
    if(item.cover_url){const img=document.createElement('img');img.src=item.cover_url;img.alt='';img.loading='lazy';row.append(img)}
    else{const placeholder=document.createElement('span');placeholder.className='placeholder';placeholder.textContent=item.kind.toUpperCase();row.append(placeholder)}
    const summary=document.createElement('div');const title=document.createElement('h3');title.textContent=item.title;
    if(!item.is_published){const pill=document.createElement('span');pill.className='pill draft';pill.textContent='草稿';title.append(pill)}
    const desc=document.createElement('p');desc.textContent=`${{photo:'攝影',video:'影片',project:'專案'}[item.kind]} · ${item.subtitle||item.category||'未分類'}`;
    summary.append(title,desc);row.append(summary);
    const actions=document.createElement('div');actions.className='entry-actions';
    const edit=document.createElement('button');edit.className='btn secondary';edit.textContent='編輯';edit.type='button';edit.addEventListener('click',()=>editItem(item));
    const del=document.createElement('button');del.className='btn danger';del.textContent='刪除';del.type='button';del.addEventListener('click',()=>deleteItem(item));
    actions.append(edit,del);row.append(actions);host.append(row);
  }
}
function editItem(item){
  revokeMediaPreviews();activeItem=item;
  for(const [id,value] of Object.entries({kind:item.kind,title:item.title,subtitle:item.subtitle,description:item.description,externalUrl:item.external_url,year:item.year,role:item.role,tools:(item.tools||[]).join(', '),notes:item.notes,order:item.sort_order}))$(id).value=value??'';
  updateOptions(item.category);$('published').checked=item.is_published;
  $('galleryFiles').value='';$('extraFiles').value='';mediaDraft=legacyMedia(item);renderMediaDraft();
  $('formHeading').textContent='編輯：'+item.title;
  window.scrollTo({top:$('itemForm').getBoundingClientRect().top+window.scrollY-160,behavior:'smooth'});
  tell('正在編輯「'+item.title+'」。可以繼續追加照片、修改每張敘述、調整順序與封面。記得按儲存。');
}
async function deleteItem(item){
  if(!isOwner())return;
  if(!confirm(`確定永久刪除「${item.title}」和其全部照片／附件？這無法復原。`))return;
  tell('正在刪除「'+item.title+'」…');
  const {error}=await db.from('portfolio_items').delete().eq('id',item.id);
  if(error){tell('刪除失敗：'+error.message,'error');return}
  await removeUnusedFiles([...new Set([item.cover_url,item.media_url,...(item.media_items||[]).map(x=>x.url)].filter(Boolean))]);
  if(activeItem?.id===item.id)clearForm();
  tell('已刪除「'+item.title+'」。','ok');await reload();
}
async function save(e){
  e.preventDefault();if(!isOwner()){tell('權限不足。','error');return}
  const kind=$('kind').value,title=$('title').value.trim(),description=$('description').value.trim(),external=$('externalUrl').value.trim();
  if(!title||!description){tell('請輸入標題和完整描述。','error');return}
  try{
    if(external&&!/^https?:\/\//i.test(external))throw Error('外部連結請使用 https:// 或 http:// 網址。');
    if(kind==='photo'&&!mediaDraft.some(x=>x.type==='image'))throw Error('攝影作品至少需要一張照片。');
    if(kind==='photo'&&mediaDraft.some(x=>x.type!=='image'))throw Error('攝影作品目前只接受照片。');
    if(kind==='video'&&!mediaDraft.some(x=>x.type==='video')&&!external)throw Error('影片作品請至少選一支影片或填外部影音連結。');
    if(mediaDraft.length>100)throw Error('每個作品最多 100 個檔案。');
    setLoading(true);tell('正在上傳照片與附件（逐個處理），請勿關閉頁面…');
    const paths=[];
    try{
      const saved=[];
      for(let i=0;i<mediaDraft.length;i++){
        const m=mediaDraft[i];
        if(m.file)tell(`正在上傳第 ${i+1} / ${mediaDraft.length} 個檔案：${m.name}`);
        const url=m.file ? await uploadOne(m.file,m.type==='image'?'images':m.type==='video'?'videos':'documents',paths) : m.url;
        if(!url)throw Error('檔案沒有可使用的網址：'+m.name);
        saved.push({id:m.id,url,type:m.type,name:m.name,description:(m.description||'').trim(),is_cover:!!m.is_cover});
      }
      const cover=saved.find(x=>x.type==='image'&&x.is_cover)||saved.find(x=>x.type==='image');
      const primary=saved.find(x=>kind==='video'?x.type==='video':x.type!=='image');
      const row={kind,title,subtitle:$('subtitle').value.trim(),description,category:$('category').value,
        cover_url:cover?.url||'',media_url:primary?.url||'',media_items:saved,
        external_url:external,role:$('role').value.trim(),tools:$('tools').value.split(',').map(s=>s.trim()).filter(Boolean),
        notes:$('notes').value.trim(),year:Number($('year').value)||null,
        sort_order:Number($('order').value)||0,is_published:$('published').checked};
      const old=activeItem;
      const result=old ? await db.from('portfolio_items').update(row).eq('id',old.id).select().single()
                       : await db.from('portfolio_items').insert(row).select().single();
      if(result.error){
        if(/media_items|column|schema cache/i.test(result.error.message))throw Error('請先在 Supabase SQL Editor 執行 V8_先執行這個.sql，再重新儲存。原作品沒有受到影響。');
        throw result.error;
      }
      // 資料庫確定儲存後才清理從這筆作品移除的舊檔案；不會影響其他作品
      if(old){
        const previous=new Set([old.cover_url,old.media_url,...(old.media_items||[]).map(m=>m.url)].filter(Boolean));
        const current=new Set([row.cover_url,row.media_url,...saved.map(m=>m.url)].filter(Boolean));
        await removeUnusedFiles([...previous].filter(url=>!current.has(url)));
      }
      clearForm();tell('已儲存'+(row.is_published?'並發佈':'為草稿')+'：「'+title+'」，共 '+saved.length+' 個檔案。','ok');await reload();
    }catch(error){
      if(paths.length)await db.storage.from(CLOUD_CONFIG.bucket).remove(paths);
      throw error;
    }
  }catch(error){tell('儲存失敗：'+(error?.message||String(error)),'error')}
  finally{setLoading(false)}
}
async function signOut(){if(db)await db.auth.signOut();user=null;show('loginPanel');tell('已登出。')}
async function onSession(){
  const {data:{session},error}=await db.auth.getSession();
  if(error){tell('無法驗證登入狀態：'+error.message,'error');show('loginPanel');return}
  user=session?.user||null;
  if(!user){show('loginPanel');tell('請先登入你自己的管理者帳號。');return}
  if(!isOwner()){show('deniedPanel');tell('登入成功，但這個帳號沒有管理權限。','error');return}
  show('editorArea');$('ownerChip').textContent='VERIFIED OWNER / '+(user.email||user.id);
  tell('管理者身分已確認，可以開始編輯和上傳作品。','ok');await reload();
}
$('kind').addEventListener('change',()=>{updateOptions();if($('kind').value==='photo'&&mediaDraft.some(x=>x.type!=='image'))tell('攝影作品只能使用圖片，請移除影片／附件再儲存。','error')});
$('galleryFiles').addEventListener('change',e=>{addPickedFiles([...e.target.files],true);e.target.value=''});
$('extraFiles').addEventListener('change',e=>{addPickedFiles([...e.target.files],false);e.target.value=''});
$('itemForm').addEventListener('submit',save);
$('resetBtn').addEventListener('click',clearForm);
$('refreshBtn').addEventListener('click',reload);
$('signOut').addEventListener('click',signOut);
$('deniedSignout').addEventListener('click',signOut);
$('loginForm').addEventListener('submit',async e=>{
  e.preventDefault();
  if(!db)return;
  const email=$('email').value.trim(),password=$('password').value;
  if(!email||!password){tell('請輸入 Email 和密碼。','error');return}
  $('signInBtn').disabled=true;
  try{
    const {error}=await db.auth.signInWithPassword({email,password});
    if(error)throw error;
    $('password').value='';
    await onSession();
  }catch(error){
    tell('登入失敗：'+(error?.message||String(error)),'error');
  }finally{$('signInBtn').disabled=false}
});
updateOptions();renderMediaDraft();
if(!configured){show('setupPanel');tell('雲端上傳功能尚未設定。公開作品集仍可顯示示範內容。')}
else{
  try{
    db=await getCloudClient();
    await onSession();
    db.auth.onAuthStateChange((_event,session)=>{if(session?.user?.id!==user?.id||(!session&&user))onSession()});
  }catch(error){show('loginPanel');tell('連線失敗，請檢查網路與 Supabase 設定：'+error.message,'error')}
}
