(() => {
  if (!window.HTMLDialogElement) return;
  const navigation = performance.getEntriesByType('navigation')[0];
  const isReload = navigation ? navigation.type === 'reload' : performance.navigation?.type === 1;
  if (location.hash && !isReload) return;
  const key = 'luchi-camera-opening-v2';
  try { if (!isReload && sessionStorage.getItem(key)) return; } catch {}
  const host = document.createElement('div');
  document.body.prepend(host);
  const root = host.attachShadow({mode:'open'});
  root.innerHTML = `<style>
    :host { all:initial }
    dialog { padding:0; border:0; margin:0; position:fixed; inset:0; width:100%; height:100%; max-width:none; max-height:none; overflow:hidden; color:#f3eadc; background:radial-gradient(ellipse at 48% 48%,#40352c,#141311 68%); font-family:Georgia,serif }
    dialog::backdrop {background:transparent}
    .scene { position:absolute; inset:0; display:grid; place-items:center; overflow:hidden }
    .camera { position:relative; width:min(80vw,100vh,950px); aspect-ratio:3/2; animation:approach 2.8s ease both; mask-image:radial-gradient(ellipse 64% 65% at center,#000 68%,transparent 101%); }
    img { width:100%; height:100%; display:block }
    .iris { position:absolute; left:51.4%; top:55.8%; width:23%; aspect-ratio:1; border-radius:50%; overflow:hidden; transform:translate(-50%,-50%) }
    .iris::before,.iris::after {content:''; position:absolute; inset:0 0 49%; background:repeating-linear-gradient(5deg,#202321 0%,#101211 20%,#454743 21%,#262725 23%); animation:blade 2.4s both}
    .iris::after {inset:49% 0 0; animation-name:blade-bottom}
    .release {position:absolute; left:18.4%; top:11.5%; width:4.6%; height:2.6%; border-radius:50%; background:linear-gradient(#d3cfc0,#524f48); box-shadow:0 2px 2px #211d17; animation:press 2.4s both}
    .frame {position:absolute; inset:9% 6%; border:1px solid #d7bfa126; pointer-events:none}
    .frame::before,.frame::after {content:''; position:absolute; width:32px; height:32px; border:solid #cfc3b2; opacity:.65}
    .frame::before {top:-1px;left:-1px;border-width:1px 0 0 1px}.frame::after {bottom:-1px;right:-1px;border-width:0 1px 1px 0}
    .focus {position:absolute; top:50%;left:50%;width:38px;height:26px;border:1px solid #d9cbb990;transform:translate(-50%,-50%);animation:focus 2s both}
    .flare {position:absolute;inset:0;background:radial-gradient(ellipse,#ead5aa,#906034 60%,transparent);opacity:0;animation:expose .5s ease-out 1.7s both}
    .title {position:absolute; inset:0; display:grid; place-content:center; text-align:center; animation:develop 1s 2.18s both; text-shadow:0 3px 28px #13110e}
    .title small {font:italic clamp(20px,3vw,38px) Georgia,serif; color:#dec7a5}
    .title strong {font:normal clamp(52px,10.8vw,148px)/1.05 Georgia,serif; letter-spacing:-.07em}
    .title::after {content:'';width:42px;height:2px;margin:20px auto;background:#ba6448}
    button {position:absolute;right:6%;bottom:2.1%; padding:8px 3px; color:#e3dbcf; background:transparent;border:0;font:13px system-ui; cursor:pointer}
    dialog.leaving { opacity:0; transition:opacity .45s }
    @keyframes approach {0% { transform:scale(.86);opacity:0;filter:blur(5px)} 24% {opacity:1;filter:blur(0)} 68% {transform:scale(1.02);opacity:1} 100% {transform:scale(1.38);opacity:.13;filter:blur(2px)}}
    @keyframes focus {0%,100% {opacity:0} 30%,70% {opacity:1} 65% {border-color:#a7c792}}
    @keyframes blade {0%,70%,100% {transform:translateY(-103%)} 74%,81% {transform:none}}
    @keyframes blade-bottom {0%,70%,100% {transform:translateY(103%)} 74%,81% {transform:none}}
    @keyframes press {0%,64%,84%,100% {transform:none;opacity:0} 69%,78% {transform:translateY(3px);opacity:1}}
    @keyframes expose {0%,100% {opacity:0} 18% {opacity:.36}}
    @keyframes develop {from {opacity:0;transform:translateY(14px);filter:blur(4px)} to {opacity:1;transform:none;filter:none}}
    @media(max-width:600px){.camera{width:99vw}.frame{inset:12% 5%}}
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important} .camera{opacity:.14}.focus,.iris,.release{display:none}}
    </style><dialog aria-label="Luchi Studio 開場"><div class="scene">
    <div class="camera" aria-hidden="true"><img src="studio-camera.webp" alt=""><span class="iris"></span><span class="release"></span></div>
    <div class="focus"></div><div class="flare"></div><div class="frame"></div>
    <div class="title" lang="en"><small>welcome to</small> <strong>luchi studio</strong></div>
    <button type="button">略過開場 ↗</button></div></dialog>`;
  const dialog = root.querySelector('dialog');
  if (!dialog.showModal) {host.remove(); return;}
  const dismiss = () => dialog.close();
  root.querySelector('button').onclick = dismiss;
  dialog.showModal();
  try {sessionStorage.setItem(key,'1');} catch {}
  const duration = matchMedia('(prefers-reduced-motion: reduce)').matches ? 1300 : 4450;
  const fade = setTimeout(() => dialog.classList.add('leaving'), duration);
  const end = setTimeout(dismiss, duration + 460);
  window.addEventListener('pagehide', dismiss, {once:true});
  dialog.addEventListener('close', () => {
    clearTimeout(fade); clearTimeout(end);
    window.removeEventListener('pagehide', dismiss); host.remove();
  }, {once:true});
})();
