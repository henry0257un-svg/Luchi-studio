/* =========================================================
       手動修改示範作品可以編輯以下區塊；正式內容建議從 admin.html 上傳：
       ① CONTACT：信箱和社群
       ② PHOTOS：每張照片都有 description 描述，圖片檔和 HTML 放同一層
       ③ VIDEOS：YouTube、Vimeo、MP4；空連結表示示範卡片
       ④ PROJECTS：專案作品、使用工具及詳細介紹
       示範圖片不是真實攝影作品，請替換成自己的照片。
       ========================================================= */
    const CONTACT={
      email:'henry0257un@gmail.com',
      instagram:'https://www.instagram.com/lu.chi_l/',
      github:'https://github.com/henry0257un-svg'
    };
    const PHOTOS=[
      {src:'demo-photo-01.jpg',title:'After Hours',category:'street',info:'街頭 / 城市光影',description:'城市入夜後，路燈讓尋常街角有了另一種戲劇性。這張練習記錄光線落在建築上的瞬間。',demo:true},
      {src:'demo-photo-02.jpg',title:'Blue Hour',category:'nature',info:'風景 / 海岸',description:'天色從明亮轉向靛藍的短短幾分鐘，是我最想留住的海岸線。',demo:true},
      {src:'demo-photo-03.jpg',title:'Window Light',category:'details',info:'細節 / 光線練習',description:'不一定需要宏大的風景，一扇窗、一束光，也能讓畫面安靜下來。',demo:true},
      {src:'demo-photo-04.jpg',title:'Greenhouse',category:'nature',info:'風景 / 植物',description:'在植物層次之間尋找節奏，觀察葉片與空間彼此交錯的方式。',demo:true},
      {src:'demo-photo-05.jpg',title:'City at Night',category:'street',info:'街頭 / 夜色',description:'夜晚的街景擁有白天看不見的顏色，我試著把這份孤獨留下來。',demo:true},
      {src:'demo-photo-06.jpg',title:'Architecture 01',category:'street',info:'街頭 / 建築',description:'建築的線條像畫面裡的標點，讓日常街景變成一張幾何構圖。',demo:true},
      {src:'demo-photo-07.jpg',title:'Before Sunset',category:'nature',info:'風景 / 餘暉',description:'夕陽將天空慢慢推向橘色，這是一天結束之前的最後一道光。',demo:true},
      {src:'demo-photo-08.jpg',title:'Leaves & Shadows',category:'nature',info:'風景 / 樹影',description:'有時候影子比主角更有故事，我想捕捉樹葉留在地面上的文字。',demo:true},
      {src:'demo-photo-09.jpg',title:'Midnight Motion',category:'street',info:'街頭 / 長曝',description:'利用移動與光跡營造流動感，練習在靜態照片裡呈現時間。',demo:true},
      {src:'demo-photo-10.jpg',title:'Quiet Morning',category:'details',info:'細節 / 靜物',description:'早晨的物件與柔和自然光，構成一段安靜、不需要解釋的日常。',demo:true},
      {src:'demo-photo-11.jpg',title:'Form & Shadow',category:'details',info:'細節 / 建築',description:'形狀與光影互相拉扯，簡單的結構也能成為值得凝視的畫面。',demo:true},
      {src:'demo-photo-12.jpg',title:'Rainy Walk',category:'street',info:'街頭 / 雨後',description:'雨後的街道會反射新的世界，在那些倒影裡重新看見城市。',demo:true}
    ];
    const VIDEOS=[
      {title:'FRAME BY FRAME',type:'短片 / 導演・剪輯',year:'2026',duration:'SHORT FILM',poster:'demo-photo-05.jpg',videoUrl:'',description:'示範影片：把這張卡改成你自己的短片，介紹故事、拍攝過程與負責職務。',demo:true},
      {title:'THE WAY WE SEE',type:'生活紀錄 / Cinematic Video',year:'2026',duration:'VIDEO',poster:'demo-photo-07.jpg',videoUrl:'',description:'示範影片：可以展示活動紀錄、旅拍、動態攝影或 MV。',demo:true},
      {title:'EDITING STUDIES',type:'剪輯・調色 / Editing Reel',year:'2026',duration:'SHOWREEL',poster:'demo-photo-03.jpg',videoUrl:'',description:'示範影片：適合放剪輯節奏、聲音設計或調色前後對照。',demo:true}
    ];
    const PROJECTS=[
      {title:'F1 DESIGN LAB',label:'WEB DESIGN / 2026',category:['web','design'],type:'互動網站・資訊視覺',image:'art:f1',fallback:'linear-gradient(130deg,#1c2d28,#74917b 60%,#baba9f)',description:'以 F1 經典賽道為主題，設計可以依洲別探索賽道的互動式網站。整理賽道資料，讓資訊在不同頁面之間維持一致的閱讀體驗。',role:'網站設計 / 前端製作',tools:['HTML','CSS','JavaScript'],notes:'內容展示建議：首頁視覺、賽道清單、單條賽道頁、互動功能與製作過程。請依實際成果調整描述。',url:'',sample:false},
      {title:'MEMORY_404',label:'INTERACTIVE STORY / 2026',category:['web','design'],type:'解謎網站・互動敘事',image:'art:memory',fallback:'linear-gradient(135deg,#222232,#89657f,#ccb0a5)',description:'以「找回記憶」為概念的章節式解謎網站。透過插畫、故事、線索與密碼機制，引導使用者一步步參與互動。',role:'企劃 / 故事 / 前端互動',tools:['HTML','CSS','JavaScript','Visual Storytelling'],notes:'內容展示建議：故事設定、使用流程、各章節設計、互動機制與最後的完成畫面。私人文字與資訊公開前記得先檢查。',url:'',sample:false},
      {title:'MIGRATION / 瑤族遷徙',label:'CULTURE / ANIMATION',category:['design'],type:'文化研究・動畫敘事',image:'art:migration',fallback:'linear-gradient(135deg,#443027,#bf8060,#e8c2a0)',description:'以瑤族文化與遷徙故事為主題，結合研究、視覺圖騰與短篇動畫分鏡，呈現文化敘事的另一種可能。',role:'視覺敘事 / 動畫製作',tools:['Research','Storyboard','Motion'],notes:'內容展示建議：調查資料、圖騰的視覺轉譯、分鏡與完成動畫。若有成片，也可以同時新增至影片展區。',url:'',sample:false},
      {title:'MATERIAL STUDIES',label:'3D / PRACTICE',category:['design','3d'],type:'3D 材質・光影測試',image:'art:material',fallback:'linear-gradient(135deg,#363a4d,#9a9db3)',description:'示範專案：放入 Maya 模型、材質測試與渲染畫面，記錄模型從建置到呈現的過程。',role:'3D 建模 / 材質',tools:['Maya','Lighting'],notes:'示範卡片；完成自己的作品後再補上實際經過、工具與成果。',url:'',sample:true}
    ];

    const ART = {
      'f1': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjgyMCIgdmlld0JveD0iMCAwIDE2MDAgODIwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWEyOTI1Ii8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIHN0b3AtY29sb3I9IiMxMDFjMTgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0ZDcwNWYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI4MjAiIGZpbGw9InVybCgjZikiLz48cGF0aCBkPSJNMCwwIEwwLDgyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzZkNGJkIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik04MiwwIEw4Miw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMTY0LDAgTDE2NCw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMjQ2LDAgTDI0Niw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMzI4LDAgTDMyOCw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNNDEwLDAgTDQxMCw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNNDkyLDAgTDQ5Miw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNNTc0LDAgTDU3NCw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNNjU2LDAgTDY1Niw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNNzM4LDAgTDczOCw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNODIwLDAgTDgyMCw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNOTAyLDAgTDkwMiw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNOTg0LDAgTDk4NCw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMTA2NiwwIEwxMDY2LDgyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzZkNGJkIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0xMTQ4LDAgTDExNDgsODIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNmQ0YmQiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjEyIi8+PHBhdGggZD0iTTEyMzAsMCBMMTIzMCw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMTMxMiwwIEwxMzEyLDgyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzZkNGJkIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0xMzk0LDAgTDEzOTQsODIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNmQ0YmQiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjEyIi8+PHBhdGggZD0iTTE0NzYsMCBMMTQ3Niw4MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMTU1OCwwIEwxNTU4LDgyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzZkNGJkIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0wLDAgTDE2MDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzZkNGJkIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0wLDgyIEwxNjAwLDgyIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNmQ0YmQiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjEyIi8+PHBhdGggZD0iTTAsMTY0IEwxNjAwLDE2NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzZkNGJkIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0wLDI0NiBMMTYwMCwyNDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMCwzMjggTDE2MDAsMzI4IiBmaWxsPSJub25lIiBzdHJva2U9IiNjNmQ0YmQiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjEyIi8+PHBhdGggZD0iTTAsNDEwIEwxNjAwLDQxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzZkNGJkIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0wLDQ5MiBMMTYwMCw0OTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMCw1NzQgTDE2MDAsNTc0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjNmQ0YmQiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjEyIi8+PHBhdGggZD0iTTAsNjU2IEwxNjAwLDY1NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzZkNGJkIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0wLDczOCBMMTYwMCw3MzgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZDRiZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMTIiLz48cGF0aCBkPSJNMTAwIDY0NSBDMTg1IDUyMCAzMTUgNjI1IDQ2MCA1NjAgQzU5MCA1MDAgNTA1IDI2MCA2NTUgMjYwIEM3NjUgMjYwIDc0OCA0NTAgODY1IDQyNCBDOTY1IDM5OCA5NDggMTQyIDEwOTkgMTU1IEMxMjY0IDE3MCAxMTgzIDU3MCAxMzkwIDU0MCBDMTQ1MCA1MjkgMTQ5MiA0OTAgMTU1MCA0NDAiIHN0cm9rZT0iI2RhZWFhMiIgc3Ryb2tlLXdpZHRoPSIxMDYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjE0Ii8+CjxwYXRoIGQ9Ik0xMDAgNjQ1IEMxODUgNTIwIDMxNSA2MjUgNDYwIDU2MCBDNTkwIDUwMCA1MDUgMjYwIDY1NSAyNjAgQzc2NSAyNjAgNzQ4IDQ1MCA4NjUgNDI0IEM5NjUgMzk4IDk0OCAxNDIgMTA5OSAxNTUgQzEyNjQgMTcwIDExODMgNTcwIDEzOTAgNTQwIEMxNDUwIDUyOSAxNDkyIDQ5MCAxNTUwIDQ0MCIgc3Ryb2tlPSIjZTVlZWM0IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1kYXNoYXJyYXk9IjI0IDE4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMTA4OSIgY3k9IjE1NSIgcj0iMTciIGZpbGw9IiNlNDU1MzUiLz48Y2lyY2xlIGN4PSIxMDEiIGN5PSI2NDUiIHI9IjE3IiBmaWxsPSIjZGJlNmIxIi8+CjxwYXRoIGQ9Ik0xMDAgNzM0TDE1MDAgNzM0IiBzdHJva2U9IiNkYWU1YmYiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjYiLz4KPHRleHQgeD0iOTIiIHk9IjE0MCIgZmlsbD0iI2Q4ZTdiNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTA5IiBsZXR0ZXItc3BhY2luZz0iLTgiPkYxPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMjE0IiBmaWxsPSIjZTVlY2NhIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIyNSIgbGV0dGVyLXNwYWNpbmc9IjMiPkRFU0lHTiBMQUIgIC8gIENJUkNVSVQgQVJDSElWRTwvdGV4dD48dGV4dCB4PSI5OSIgeT0iNzA0IiBmaWxsPSIjZjZmMmU3IiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSI1NyIgbGV0dGVyLXNwYWNpbmc9Ii0zIj5USEUgQVJUIE9GIFRIRSBBUEVYLjwvdGV4dD48dGV4dCB4PSIxMzUwIiB5PSI5MiIgZmlsbD0iI2Q4ZTdiNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMjIiIGxldHRlci1zcGFjaW5nPSIzIj4wMDEgLyAwMjY8L3RleHQ+PC9zdmc+',
      'memory': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijk2MCIgdmlld0JveD0iMCAwIDEyMDAgOTYwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzAyYTNkIi8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJtbSI+PHN0b3Agc3RvcC1jb2xvcj0iIzljN2E5YSIvPjxzdG9wIG9mZnNldD0iLjYzIiBzdG9wLWNvbG9yPSIjNTA0MzVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMmMyODNlIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iOTYwIiBmaWxsPSJ1cmwoI21tKSIvPgo8Y2lyY2xlIGN4PSI4MjkiIGN5PSI0ODIiIHI9IjMyNCIgc3Ryb2tlPSIjZDljNmQxIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSI4MjkiIGN5PSI0ODIiIHI9IjI0MiIgc3Ryb2tlPSIjZDljNmQxIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSI4MjkiIGN5PSI0ODIiIHI9IjE2MCIgc3Ryb2tlPSIjZDljNmQxIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSI4MjkiIGN5PSI0ODIiIHI9Ijg0IiBzdHJva2U9IiNkOWM2ZDEiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjU1Ii8+CjxyZWN0IHg9IjY1IiB5PSI5NSIgd2lkdGg9IjQxMiIgaGVpZ2h0PSI1OTUiIHRyYW5zZm9ybT0icm90YXRlKC04IDI3MCA0MDApIiBmaWxsPSIjYjk4NTg5IiBvcGFjaXR5PSIuODUiLz4KPHJlY3QgeD0iNzkiIHk9IjkwIiB3aWR0aD0iNDEyIiBoZWlnaHQ9IjU5NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTggMjgwIDQxMCkiIGZpbGw9IiNmMGQ2Y2IiLz4KPHBhdGggZD0iTTcyMyAzNTZMODczIDM1Nkw4NzMgNTAwTDcyMyA1MDBaIiBzdHJva2U9IiNkNWJhY2QiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNNzkyIDU3MEw3OTIgNjM3IiBzdHJva2U9IiNlOWM1Y2IiIHN0cm9rZS13aWR0aD0iNSIvPjxjaXJjbGUgY3g9Ijc5MiIgY3k9IjQ5OCIgcj0iNTMiIGZpbGw9IiNjNzRlNGEiLz4KPHBhdGggZD0iTTAgNzc3TDEyMDAgNzc3IiBzdHJva2U9IiNkNWJhY2QiIHN0cm9rZS1vcGFjaXR5PSIuNiIvPgo8dGV4dCB4PSI5MyIgeT0iMzE4IiBmaWxsPSIjMzIyYjNkIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyMDQiIGxldHRlci1zcGFjaW5nPSItMTIiPjQwNDwvdGV4dD48dGV4dCB4PSIxMDEiIHk9IjM4MiIgZmlsbD0iIzQ3M2I0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMjMiIGxldHRlci1zcGFjaW5nPSIyIj5NRU1PUlkgTk9UIExPU1Q8L3RleHQ+PHRleHQgeD0iOTciIHk9IjQ0NyIgZmlsbD0iIzQ3M2I0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMjUiIGxldHRlci1zcGFjaW5nPSIzIj5SRUNPVkVSIC8gUkVQTEFZPC90ZXh0Pjx0ZXh0IHg9IjkyIiB5PSI4NjQiIGZpbGw9IiNlZmU1ZGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjUyIiBsZXR0ZXItc3BhY2luZz0iLTIiPlJFQ09WRVJFRCBGUkFHTUVOVFM8L3RleHQ+PHRleHQgeD0iOTAiIHk9IjkxMyIgZmlsbD0iI2Q5YjljNiIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMjIiIGxldHRlci1zcGFjaW5nPSIzIj5BTiBJTlRFUkFDVElWRSBTVE9SWSAg4oCUICAyMDI2PC90ZXh0Pjwvc3ZnPg==',
      'migration': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijk2MCIgdmlld0JveD0iMCAwIDEyMDAgOTYwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2Y5YTc4Ii8+PGNpcmNsZSBjeD0iODk0IiBjeT0iMjUyIiByPSIxNjEiIGZpbGw9IiNmNWQ3YTQiLz4KPHBhdGggZD0iTTAgNDY1TDI2NCAyOTJMNDgzIDQ3Nkw3MjUgMjYwTDk1MCA0NjhMMTIwMCAzNDBWOTYwSDBaIiBmaWxsPSIjYzE3YTYxIi8+CjxwYXRoIGQ9Ik0wIDYwOEwxNzggNTEwTDM0NSA2MzJMNjE0IDM4OUw4NTAgNjU4TDEyMDAgNDg3Vjk2MEgwWiIgZmlsbD0iIzg4NTk0NiIvPgo8cGF0aCBkPSJNMCA3NDdMMTkxIDY3MkwzNzAgNzYwTDY2NCA1NTBMODcwIDcwOEwxMjAwIDU5MlY5NjBIMFoiIGZpbGw9IiM0NjNkMzYiLz4KPHBhdGggZD0iTTAgODU2UTI3MCA3MzIgNTM1IDgyNlQxMjAwIDgyMVY5NjBIMFoiIGZpbGw9IiMyZTM5MzQiLz4KPGNpcmNsZSBjeD0iMzMyIiBjeT0iNzUyIiByPSI5IiBmaWxsPSIjZTdiYzhkIi8+PHBhdGggZD0iTTMyMyA3NjJMMzE4IDgwNEwzNDMgODA0TDM0MCA3NjJaIiBmaWxsPSIjMjMyYjI5Ii8+PHBhdGggZD0iTTMyNiA3OThMMzE3IDgzMk0zMzcgNzk4TDM0NiA4MzIiIHN0cm9rZT0iIzIzMmIyOSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PGNpcmNsZSBjeD0iMzY1IiBjeT0iNzUzIiByPSI5IiBmaWxsPSIjZTdiYzhkIi8+PHBhdGggZD0iTTM1NiA3NjNMMzUxIDgwNUwzNzYgODA1TDM3MyA3NjNaIiBmaWxsPSIjMjMyYjI5Ii8+PHBhdGggZD0iTTM1OSA3OTlMMzUwIDgzM00zNzAgNzk5TDM3OSA4MzMiIHN0cm9rZT0iIzIzMmIyOSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PGNpcmNsZSBjeD0iNDA4IiBjeT0iNzUzIiByPSI5IiBmaWxsPSIjZTdiYzhkIi8+PHBhdGggZD0iTTM5OSA3NjNMMzk0IDgwNUw0MTkgODA1TDQxNiA3NjNaIiBmaWxsPSIjMjMyYjI5Ii8+PHBhdGggZD0iTTQwMiA3OTlMMzkzIDgzM000MTMgNzk5TDQyMiA4MzMiIHN0cm9rZT0iIzIzMmIyOSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PGNpcmNsZSBjeD0iNDYzIiBjeT0iNzU3IiByPSI5IiBmaWxsPSIjZTdiYzhkIi8+PHBhdGggZD0iTTQ1NCA3NjdMNDQ5IDgwOUw0NzQgODA5TDQ3MSA3NjdaIiBmaWxsPSIjMjMyYjI5Ii8+PHBhdGggZD0iTTQ1NyA4MDNMNDQ4IDgzN000NjggODAzTDQ3NyA4MzciIHN0cm9rZT0iIzIzMmIyOSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PGNpcmNsZSBjeD0iNTEwIiBjeT0iNzYxIiByPSI5IiBmaWxsPSIjZTdiYzhkIi8+PHBhdGggZD0iTTUwMSA3NzFMNDk2IDgxM0w1MjEgODEzTDUxOCA3NzFaIiBmaWxsPSIjMjMyYjI5Ii8+PHBhdGggZD0iTTUwNCA4MDdMNDk1IDg0MU01MTUgODA3TDUyNCA4NDEiIHN0cm9rZT0iIzIzMmIyOSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PGNpcmNsZSBjeD0iNTUwIiBjeT0iNzY3IiByPSI5IiBmaWxsPSIjZTdiYzhkIi8+PHBhdGggZD0iTTU0MSA3NzdMNTM2IDgxOUw1NjEgODE5TDU1OCA3NzdaIiBmaWxsPSIjMjMyYjI5Ii8+PHBhdGggZD0iTTU0NCA4MTNMNTM1IDg0N001NTUgODEzTDU2NCA4NDciIHN0cm9rZT0iIzIzMmIyOSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PGNpcmNsZSBjeD0iNjAwIiBjeT0iNzc0IiByPSI5IiBmaWxsPSIjZTdiYzhkIi8+PHBhdGggZD0iTTU5MSA3ODRMNTg2IDgyNkw2MTEgODI2TDYwOCA3ODRaIiBmaWxsPSIjMjMyYjI5Ii8+PHBhdGggZD0iTTU5NCA4MjBMNTg1IDg1NE02MDUgODIwTDYxNCA4NTQiIHN0cm9rZT0iIzIzMmIyOSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PHRleHQgeD0iNjkiIHk9IjEzNiIgZmlsbD0iIzNlMzkzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMjYiIGxldHRlci1zcGFjaW5nPSI0Ij5ST09UUyAvIFJPVVRFUzwvdGV4dD48dGV4dCB4PSI2NyIgeT0iMjExIiBmaWxsPSIjZmZmMWQ3IiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxMDUiIGxldHRlci1zcGFjaW5nPSItNSI+TUlHUkFUSU9OPC90ZXh0Pjx0ZXh0IHg9Ijc1IiB5PSI4OTYiIGZpbGw9IiNmZmYxZDciIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjQzIiBsZXR0ZXItc3BhY2luZz0iLTIiPlNUT1JJRVMgV0UgQ0FSUlkuPC90ZXh0Pjwvc3ZnPg==',
      'streets': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAxMjAwIDEwMDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNkM2QyYzciLz48cGF0aCBkPSJNMCAwTDYxNSAwTDYxNSAxMDAwSDBaIiBmaWxsPSIjMzgzZDNhIi8+CjxwYXRoIGQ9Ik0xMDAgMEwyNzAgMEwyNzAgMTAwMEgxMDBaIiBmaWxsPSIjNTQ1YTU0Ii8+CjxwYXRoIGQ9Ik0yOTAgMEwzNDUgMEwzNDUgMTAwMEgyOTBaIiBmaWxsPSIjMWIyNDIxIi8+CjxwYXRoIGQ9Ik02NDAgMEwxMTgwIDBMMTE4MCA3MjBMNjQwIDk1MFoiIGZpbGw9IiNhOGFhYTAiLz4KPHBhdGggZD0iTTcwNiAwTDc2NiAwTDc2NiA4ODBMNzA2IDkxMFoiIGZpbGw9IiNlY2U4ZDciLz4KPHBhdGggZD0iTTg1OSAwTDkyMiAwTDkyMiA4MDBMODU5IDgzMFoiIGZpbGw9IiNlY2U4ZDciLz4KPHBhdGggZD0iTTEwNTAgMEwxMTEzIDBMMTExMyA3MzhMMTA1MCA3NjdaIiBmaWxsPSIjZWNlOGQ3Ii8+CjxwYXRoIGQ9Ik0wIDY5OUwxMjAwIDU5OSIgc3Ryb2tlPSIjZTJkNWJmIiBzdHJva2Utd2lkdGg9IjE5Ii8+CjxyZWN0IHg9IjEwMyIgeT0iMTA5IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Q2NGYzOCIvPgo8cGF0aCBkPSJNMTI1IDE4M0wyMzAgMTgzTTE3NyAxMzBMMTc3IDIzMyIgc3Ryb2tlPSIjZmZlOGQyIiBzdHJva2Utd2lkdGg9IjEwIi8+Cjx0ZXh0IHg9IjY0IiB5PSI4NTMiIGZpbGw9IiNmYmYyZTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE3MiIgbGV0dGVyLXNwYWNpbmc9Ii04Ij5TVElMTDwvdGV4dD48dGV4dCB4PSI2NiIgeT0iOTE5IiBmaWxsPSIjZWVlN2Q5IiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIyNSIgbGV0dGVyLXNwYWNpbmc9IjMiPkEgU1RVRFkgT0YgRVZFUllEQVkgTElHSFQ8L3RleHQ+PC9zdmc+',
      'film': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijk2MCIgdmlld0JveD0iMCAwIDEyMDAgOTYwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMmIyOTMyIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJmbSIgeDI9IjEiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjNzI0NDM4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWYyMzMwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iOTYwIiBmaWxsPSJ1cmwoI2ZtKSIvPgo8cmVjdCB4PSI5OSIgeT0iMTQ5IiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MjUiIGZpbGw9IiMyMDFjMjQiIHN0cm9rZT0iI2Q4YmJiMCIgc3Ryb2tlLXdpZHRoPSIxMyIvPgo8cmVjdCB4PSIxMTciIHk9IjE3MCIgd2lkdGg9Ijk2NSIgaGVpZ2h0PSI0ODYiIGZpbGw9IiNhYTY2NWIiLz4KPGNpcmNsZSBjeD0iODAwIiBjeT0iMzczIiByPSIxOTQiIGZpbGw9IiNkY2FhOGQiIG9wYWNpdHk9Ii44NSIvPgo8cGF0aCBkPSJNMTMyIDU2OUw0MzEgMzI0TDY5MCA1NjlMODYyIDQ2MEwxMDgyIDYzNUgxMzJaIiBmaWxsPSIjNjQ0ODUyIi8+CjxwYXRoIGQ9Ik0xMzIgNjI1TDU0MCA0MTBMNzQ2IDYyNUw5OTEgNTMyTDEwODIgNjUySDEzMloiIGZpbGw9IiMzMTJiMzciLz4KPHJlY3QgeD0iMTIwIiB5PSIxMDYiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyNyIgcng9IjIiIGZpbGw9IiNjMGEwOWIiLz48cmVjdCB4PSIxMjAiIHk9IjY5MiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjI3IiByeD0iMiIgZmlsbD0iI2MwYTA5YiIvPjxyZWN0IHg9IjIyMSIgeT0iMTA2IiB3aWR0aD0iNjAiIGhlaWdodD0iMjciIHJ4PSIyIiBmaWxsPSIjYzBhMDliIi8+PHJlY3QgeD0iMjIxIiB5PSI2OTIiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyNyIgcng9IjIiIGZpbGw9IiNjMGEwOWIiLz48cmVjdCB4PSIzMjIiIHk9IjEwNiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjI3IiByeD0iMiIgZmlsbD0iI2MwYTA5YiIvPjxyZWN0IHg9IjMyMiIgeT0iNjkyIiB3aWR0aD0iNjAiIGhlaWdodD0iMjciIHJ4PSIyIiBmaWxsPSIjYzBhMDliIi8+PHJlY3QgeD0iNDIzIiB5PSIxMDYiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyNyIgcng9IjIiIGZpbGw9IiNjMGEwOWIiLz48cmVjdCB4PSI0MjMiIHk9IjY5MiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjI3IiByeD0iMiIgZmlsbD0iI2MwYTA5YiIvPjxyZWN0IHg9IjUyNCIgeT0iMTA2IiB3aWR0aD0iNjAiIGhlaWdodD0iMjciIHJ4PSIyIiBmaWxsPSIjYzBhMDliIi8+PHJlY3QgeD0iNTI0IiB5PSI2OTIiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyNyIgcng9IjIiIGZpbGw9IiNjMGEwOWIiLz48cmVjdCB4PSI2MjUiIHk9IjEwNiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjI3IiByeD0iMiIgZmlsbD0iI2MwYTA5YiIvPjxyZWN0IHg9IjYyNSIgeT0iNjkyIiB3aWR0aD0iNjAiIGhlaWdodD0iMjciIHJ4PSIyIiBmaWxsPSIjYzBhMDliIi8+PHJlY3QgeD0iNzI2IiB5PSIxMDYiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyNyIgcng9IjIiIGZpbGw9IiNjMGEwOWIiLz48cmVjdCB4PSI3MjYiIHk9IjY5MiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjI3IiByeD0iMiIgZmlsbD0iI2MwYTA5YiIvPjxyZWN0IHg9IjgyNyIgeT0iMTA2IiB3aWR0aD0iNjAiIGhlaWdodD0iMjciIHJ4PSIyIiBmaWxsPSIjYzBhMDliIi8+PHJlY3QgeD0iODI3IiB5PSI2OTIiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyNyIgcng9IjIiIGZpbGw9IiNjMGEwOWIiLz48cmVjdCB4PSI5MjgiIHk9IjEwNiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjI3IiByeD0iMiIgZmlsbD0iI2MwYTA5YiIvPjxyZWN0IHg9IjkyOCIgeT0iNjkyIiB3aWR0aD0iNjAiIGhlaWdodD0iMjciIHJ4PSIyIiBmaWxsPSIjYzBhMDliIi8+PHJlY3QgeD0iMTAyOSIgeT0iMTA2IiB3aWR0aD0iNjAiIGhlaWdodD0iMjciIHJ4PSIyIiBmaWxsPSIjYzBhMDliIi8+PHJlY3QgeD0iMTAyOSIgeT0iNjkyIiB3aWR0aD0iNjAiIGhlaWdodD0iMjciIHJ4PSIyIiBmaWxsPSIjYzBhMDliIi8+PHRleHQgeD0iOTciIHk9Ijc1IiBmaWxsPSIjZTZjOGI0IiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIyMyIgbGV0dGVyLXNwYWNpbmc9IjMiPjAwOjAxOjI3OjE2ICAvICBNT1RJT04gU1RVRElFUzwvdGV4dD48dGV4dCB4PSI5OCIgeT0iODM3IiBmaWxsPSIjZjhlOGQyIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSI3NSIgbGV0dGVyLXNwYWNpbmc9Ii0zIj5GUkFNRSBCWSBGUkFNRTwvdGV4dD48dGV4dCB4PSIxMDMiIHk9Ijg4OCIgZmlsbD0iI2Q3YjA5YiIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMjEiIGxldHRlci1zcGFjaW5nPSI0Ij5MSUdIVC4gTU9WRU1FTlQuIFRJTUUuPC90ZXh0Pjwvc3ZnPg==',
      'material': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijk2MCIgdmlld0JveD0iMCAwIDEyMDAgOTYwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjYTJhYmJjIi8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJvcmIiIGN4PSIuMzUiIGN5PSIuMjUiIHI9Ii43NSI+PHN0b3Agc3RvcC1jb2xvcj0iI2Y4ZjdmMSIvPjxzdG9wIG9mZnNldD0iLjI0IiBzdG9wLWNvbG9yPSIjYmJjN2QzIi8+PHN0b3Agb2Zmc2V0PSIuNTciIHN0b3AtY29sb3I9IiM1ODY3N2IiLz48c3RvcCBvZmZzZXQ9Ii44OCIgc3RvcC1jb2xvcj0iIzMxM2E1MSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0ZTRlMiIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0ibTIiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iI2RkZGNkMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQwNGI2MyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNMCAwTDEyMDAgMEwxMjAwIDk2MEwwIDk2MFoiIGZpbGw9IiNhNmFkYmEiLz4KPHBhdGggZD0iTTAgMzQwTDEyMDAgMTEwTTAgNDk1TDEyMDAgMjYzTTAgNjUwTDEyMDAgNDE2TTAgODA1TDEyMDAgNTY5IiBzdHJva2U9IiNlMmU2ZWIiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iLjYiLz4KPHBhdGggZD0iTTE5MCAyNTBMNTczIDE3MEw5MjkgMzc4TDU0NSA0ODZaIiBmaWxsPSIjZTFkYWQwIi8+CjxwYXRoIGQ9Ik0xOTAgMjUwTDU0NSA0ODZMNTQ1IDgwMUwxOTAgNTYzWiIgZmlsbD0iIzcwN2I4ZSIvPgo8cGF0aCBkPSJNNTQ1IDQ4Nkw5MjkgMzc4TDkyOSA2OTRMNTQ1IDgwMVoiIGZpbGw9IiM0MDRjNjQiLz4KPGNpcmNsZSBjeD0iNTcyIiBjeT0iMzg5IiByPSIyNTUiIGZpbGw9InVybCgjb3JiKSIvPgo8ZWxsaXBzZSBjeD0iNTM2IiBjeT0iMjgzIiByeD0iOTgiIHJ5PSI0NSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjIzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjIgNTM2IDI4MykiLz4KPGNpcmNsZSBjeD0iNTcyIiBjeT0iMzg5IiByPSIyNDkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U2ZTdlNSIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIuNSIvPgo8dGV4dCB4PSI2OCIgeT0iMTA1IiBmaWxsPSIjMjMyZDNhIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIyNCIgbGV0dGVyLXNwYWNpbmc9IjQiPk9CSkVDVCAgLyAgMDAzPC90ZXh0Pjx0ZXh0IHg9IjY5IiB5PSI4ODIiIGZpbGw9IiNmNWYyZWIiIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9Ijk0IiBsZXR0ZXItc3BhY2luZz0iLTQiPkZPUk0gU1RVRElFUzwvdGV4dD48dGV4dCB4PSI3MiIgeT0iOTMxIiBmaWxsPSIjZjVmMmViIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIyMSIgbGV0dGVyLXNwYWNpbmc9IjQiPk1BVEVSSUFMIC8gTElHSFQgLyBTUEFDRTwvdGV4dD48L3N2Zz4='
    };
    const imageSource=(s)=>s?.startsWith('art:') ? ART[s.slice(4)] : s;
    const body=document.body;
    const PAGE=body.dataset.page||'home';
    const IS_HOME=PAGE==='home';
    const HOME_LIMITS={photos:12,videos:4,projects:4};
    const validFilter=(param,allowed)=>allowed.includes(param)?param:'all';
    const requestedCategory=new URLSearchParams(location.search).get('category');

    function el(tag,cls,txt){let e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}
    // PHOTO WALL
    let photoCategory=PAGE==='photography'?validFilter(requestedCategory,['all','street','nature','portrait','details']):'all',visiblePhotos=[],currentAlbum=0,currentPhoto=0,photoLastFocus=null;
    const photoWall=document.getElementById('photoWall'),photoLightbox=document.getElementById('photoLightbox');
    function renderPhotos(){
      const allMatching=PHOTOS.filter(p=>photoCategory==='all'||p.category===photoCategory);
      visiblePhotos=IS_HOME ? allMatching.slice(0,HOME_LIMITS.photos) : allMatching;
      photoWall.replaceChildren();
      visiblePhotos.forEach((p,i)=>{
        const card=el('figure','photo-entry'),btn=el('button','photo-button');btn.type='button';btn.setAttribute('aria-label','開啟攝影相簿：'+p.title);
        const img=el('img');img.src=p.src;img.alt=p.title+(p.demo?'（示範圖片，請替換）':'');img.loading='lazy';img.decoding='async';
        const label=el('span','photo-image-label');label.append(el('span','',p.title),el('small','',String(i+1).padStart(2,'0')+' / '+String(visiblePhotos.length).padStart(2,'0')));
        btn.append(img,label);const n=photoImages(p).length;if(n>1)btn.append(el('span','album-count',`${n} 張照片`));if(p.demo)btn.append(el('span','photo-demo','DEMO / REPLACE'));
        btn.addEventListener('click',()=>openPhoto(i));const caption=el('figcaption','photo-caption');caption.append(el('span','photo-caption-no',String(i+1).padStart(2,'0')),el('div','photo-caption-text'));caption.lastElementChild.append(el('strong','',p.title),el('p','',p.description||p.info||''));card.append(btn,caption);photoWall.append(card);
      });
      document.getElementById('photoCount').textContent=IS_HOME
        ? `精選 ${visiblePhotos.length} / ${allMatching.length} 組攝影作品`
        : `共 ${allMatching.length} 組攝影作品`;
      const more=document.getElementById('photoViewMore');
      if(more) more.href='photography.html'+(photoCategory==='all'?'':'?category='+encodeURIComponent(photoCategory));
      if(!visiblePhotos.length)photoWall.append(el('p','empty','這個分類目前沒有照片，在 PHOTOS 裡新增就可以了。'));
    }
    document.querySelectorAll('.photo-filter').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===photoCategory)));
    document.querySelectorAll('.photo-filter').forEach(btn=>btn.addEventListener('click',()=>{
      photoCategory=btn.dataset.category;
      document.querySelectorAll('.photo-filter').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
      renderPhotos();
    }));
    function photoImages(album){
      const photos=(album?.images||[]).filter(m=>m.url||m.src);
      return photos.length?photos:[{url:album.src,description:album.description||'',name:album.title}];
    }
    function openPhoto(index){
      photoLastFocus=document.activeElement;currentAlbum=index;currentPhoto=0;setPhoto();
      photoLightbox.setAttribute('aria-hidden','false');body.classList.add('modal-open');document.getElementById('photoClose').focus();
    }
    function setPhoto(){
      const album=visiblePhotos[currentAlbum];if(!album)return;
      const photos=photoImages(album),photo=photos[currentPhoto]||photos[0];if(!photo)return;
      const im=document.getElementById('lightboxImage');im.src=photo.url||photo.src;im.alt=photo.name||album.title;
      document.getElementById('lightboxTitle').textContent=album.title;
      document.getElementById('lightboxSubtitle').textContent=(album.info||'')+(album.demo?' — DEMO / 示範圖片':'');
      document.getElementById('lightboxDescription').textContent=photo.description||album.description||'尚未填寫照片描述。';
      // V12: 攝影相簿的外部網址只會在詳細視窗中出現，未設定時完全隱藏。
      const externalLink=document.getElementById('lightboxExternalLink');
      let externalUrl='';
      try {
        const rawUrl=String(album.externalUrl||'').trim();
        if(rawUrl){const parsed=new URL(rawUrl);if(['https:','http:'].includes(parsed.protocol))externalUrl=parsed.href;}
      } catch {} // 不合法的網址不顯示連結按鈕
      externalLink.hidden=!externalUrl;
      if(externalUrl)externalLink.href=externalUrl;
      else externalLink.removeAttribute('href');
      photoLightbox.querySelector('.lightbox-figure').classList.toggle('has-external-link',Boolean(externalUrl));
      document.getElementById('lightboxNum').textContent=`${currentPhoto+1} / ${photos.length}`;
      const thumbs=document.getElementById('photoThumbs');if(thumbs){thumbs.replaceChildren();thumbs.hidden=photos.length<=1;
        photos.forEach((m,i)=>{const b=el('button','album-thumb'+(i===currentPhoto?' active':''));b.type='button';b.setAttribute('aria-label',`切換到第 ${i+1} 張照片`);
          const img=el('img');img.src=m.url||m.src;img.alt=m.name||`第 ${i+1} 張`;img.loading='lazy';b.append(img);b.addEventListener('click',()=>{currentPhoto=i;setPhoto()});thumbs.append(b)});
      }
      document.getElementById('photoPrev').disabled=photos.length<=1;
      document.getElementById('photoNext').disabled=photos.length<=1;
    }
    function shiftPhoto(n){
      const album=visiblePhotos[currentAlbum];if(!album)return;
      const length=photoImages(album).length;if(length<2)return;
      currentPhoto=(currentPhoto+n+length)%length;setPhoto();
    }
    function closePhoto(){if(photoLightbox.getAttribute('aria-hidden')==='true')return;photoLightbox.setAttribute('aria-hidden','true');body.classList.remove('modal-open');document.getElementById('lightboxImage').removeAttribute('src');photoLastFocus?.focus()}
    document.getElementById('photoPrev').addEventListener('click',()=>shiftPhoto(-1));
    document.getElementById('photoNext').addEventListener('click',()=>shiftPhoto(1));
    document.getElementById('photoClose').addEventListener('click',closePhoto);
    photoLightbox.addEventListener('click',e=>{if(e.target===photoLightbox)closePhoto()});
    let touchX=0;photoLightbox.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX},{passive:true});
    photoLightbox.addEventListener('touchend',e=>{let dx=e.changedTouches[0].screenX-touchX;if(Math.abs(dx)>65)shiftPhoto(dx<0?1:-1)},{passive:true});

    function renderAttachments(host,items,options={}){
      if(!host)return;host.replaceChildren();
      const files=(items||[]).filter(x=>x.url);
      if(!files.length){host.hidden=true;return}host.hidden=false;
      const heading=el('h4','media-heading',options.title||'更多作品內容');host.append(heading);
      const gallery=el('div','extra-media-grid');host.append(gallery);
      files.forEach((m,i)=>{
        const kind=m.type||'document',card=el('article','extra-media-card'),name=el('strong','',m.name||`檔案 ${i+1}`);
        if(kind==='image'){
          const link=el('a');link.href=m.url;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','開啟圖片 '+(m.name||i+1));
          const img=el('img');img.src=m.url;img.loading='lazy';img.alt=m.name||'作品圖片';link.append(img);card.append(link);
        }else if(kind==='video'){
          const movie=el('video');movie.controls=true;movie.preload='none';movie.src=m.url;movie.playsInline=true;card.append(movie);
        }else{
          const link=el('a','attachment-link','檢視／下載檔案 ↗');link.href=m.url;link.target='_blank';link.rel='noopener noreferrer';card.append(link);
        }
        card.append(name);
        if(m.description)card.append(el('p','',m.description));gallery.append(card);
      });
    }
    // VIDEO CARDS & PLAYER
    const videoModal=document.getElementById('videoModal'),videoPlayer=document.getElementById('videoPlayer');let videoLastFocus=null;
    function videoEmbed(url){
      try{const u=new URL(url,location.href);const host=u.hostname.toLowerCase();
        if(host==='youtu.be'||host.endsWith('.youtu.be')){const id=u.pathname.split('/')[1];if(/^[\w-]{11}$/.test(id))return 'https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1'}
        if(host==='youtube.com'||host==='www.youtube.com'||host==='m.youtube.com'){const id=u.searchParams.get('v')||(u.pathname.match(/\/(?:shorts|embed)\/([\w-]{11})/)||[])[1];if(id&&/^[\w-]{11}$/.test(id))return 'https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1'}
        if(host==='vimeo.com'||host==='www.vimeo.com'){const id=u.pathname.split('/').filter(Boolean)[0];if(/^\d+$/.test(id))return 'https://player.vimeo.com/video/'+id+'?autoplay=1'}
      }catch(err){}return null;
    }
    function renderVideos(){const grid=document.getElementById('videoGrid');grid.replaceChildren();
      const shown=IS_HOME ? VIDEOS.slice(0,HOME_LIMITS.videos) : VIDEOS;
      shown.forEach((v,i)=>{
        const card=el('article','video-card'+(i===0?' featured':'')),btn=el('button','video-action');btn.type='button';btn.setAttribute('aria-label','檢視影片：'+v.title);
        const poster=el('span','video-poster'),img=el('img');img.src=v.poster;img.alt='';img.loading='lazy';img.decoding='async';
        poster.append(img,el('span','video-number','FILM '+String(i+1).padStart(2,'0')),el('span','video-play','▶'),el('span','video-duration',v.duration));
        const caption=el('div','video-caption'),left=el('div');left.append(el('h3','',v.title+(v.demo?' / 示範':'')),el('p','',v.type));caption.append(left,el('span','mono',v.year));
        btn.append(poster,caption);btn.addEventListener('click',()=>openVideo(v));card.append(btn);grid.append(card);
      });
      const countEl=document.getElementById('videoCount');
      if(countEl)countEl.textContent=IS_HOME ? `精選 ${shown.length} / ${VIDEOS.length} 部影片` : `共 ${VIDEOS.length} 部影片`;
      if(!shown.length)grid.append(el('p','empty','目前沒有影片，之後新增的作品會顯示在這裡。'));
    }
    function openVideo(v){videoLastFocus=document.activeElement;videoPlayer.replaceChildren();
      document.getElementById('videoModalLabel').textContent=v.type;
      document.getElementById('videoModalTitle').textContent=v.title;
      document.getElementById('videoModalDesc').textContent=v.description;
      const url=(v.videoUrl||'').trim(); const embed=videoEmbed(url);
      if(embed){let iframe=el('iframe');iframe.src=embed;iframe.title=v.title;iframe.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';iframe.referrerPolicy='strict-origin-when-cross-origin';iframe.setAttribute('allowfullscreen','');videoPlayer.append(iframe)}
      else if(url&&/\.(mp4|webm|ogg)(?:[?#]|$)/i.test(url)){let player=el('video');player.src=url;player.controls=true;player.autoplay=true;player.playsInline=true;player.poster=v.poster;videoPlayer.append(player)}
      else if(url){let link=el('a','button-fill','開啟影片 ↗');link.href=url;link.target='_blank';link.rel='noopener noreferrer';videoPlayer.append(link)}
      else{videoPlayer.append(el('div','video-empty','影片展示位置\n\n在程式碼的 VIDEOS 裡填入 YouTube 或 MP4 網址，這裡就能直接播放。'))}
      renderAttachments(document.getElementById('videoExtraMedia'),v.attachments||[],{title:'影片與其他附件'});
      videoModal.setAttribute('aria-hidden','false');body.classList.add('modal-open');document.getElementById('videoClose').focus();
    }
    function closeVideo(){if(videoModal.getAttribute('aria-hidden')==='true')return;videoModal.setAttribute('aria-hidden','true');videoPlayer.querySelector('video')?.pause();videoPlayer.replaceChildren();body.classList.remove('modal-open');videoLastFocus?.focus()}
    document.getElementById('videoClose').addEventListener('click',closeVideo);
    videoModal.addEventListener('click',e=>{if(e.target===videoModal)closeVideo()});

    // PROJECTS CASE STUDIES
    const grid=document.getElementById('projectGrid'),count=document.getElementById('projectCount');let filter=PAGE==='projects'?validFilter(requestedCategory,['all','web','design','3d']):'all';
    function renderProjects(){
      const allMatching=PROJECTS.map((p,i)=>({...p,index:i})).filter(p=>filter==='all'||p.category.includes(filter));
      const shown=IS_HOME ? allMatching.slice(0,HOME_LIMITS.projects) : allMatching;
      grid.replaceChildren();grid.classList.toggle('filtered',filter!=='all');
      shown.forEach(p=>{
        const card=el('article','project-card'+(p.index===0?' wide':'')),button=el('button','project-trigger');button.type='button';button.setAttribute('aria-label','查看專案：'+p.title);
        const cover=el('div','project-cover');cover.style.setProperty('--fallback',p.fallback);
        const img=el('img');img.src=imageSource(p.image);img.alt=p.title+' 專案示意封面';img.loading='lazy';img.decoding='async';img.onerror=()=>{img.style.display='none'};
        const label=el('span','cover-label',p.label),overlay=el('span','cover-overlay'),arrow=el('span','project-arrow','↗'),stamp=el('span','cover-stamp','LUCHI / PROJECT JOURNAL');
        cover.append(img,overlay,label,arrow,stamp);
        const details=el('div','project-details'),left=el('div'),title=el('h3','',p.title);
        if(p.sample)title.append(el('span','sample-flag','示範'));
        left.append(title,el('p','',p.type));details.append(left,el('span','index',String(p.index+1).padStart(2,'0')+' / '+String(PROJECTS.length).padStart(2,'0')));
        button.append(cover,details);button.addEventListener('click',()=>openProject(p));card.append(button);grid.append(card);
      });
      count.textContent=IS_HOME ? `精選 ${shown.length} / ${allMatching.length} 個專案` : `共 ${allMatching.length} 個專案`;
      const more=document.getElementById('projectViewMore');
      if(more)more.href='projects.html'+(filter==='all'?'':'?category='+encodeURIComponent(filter));
      if(!shown.length)grid.append(el('p','empty','這個分類目前沒有專案，在 PROJECTS 裡新增就可以了。'));
    }
    document.querySelectorAll('.project-filter').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
    document.querySelectorAll('.project-filter').forEach(button=>button.addEventListener('click',()=>{
      filter=button.dataset.filter;document.querySelectorAll('.project-filter').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));renderProjects();
    }));
    const modal=document.getElementById('projectModal'),closeBtn=document.getElementById('modalClose');let projectLastFocus=null;
    function openProject(p){
      projectLastFocus=document.activeElement;
      const media=document.getElementById('modalMedia');media.style.background=p.fallback;
      const image=document.getElementById('modalImage');image.src=imageSource(p.image);image.alt=p.title+' 封面';image.style.display='block';image.onerror=()=>{image.style.display='none'};
      document.getElementById('modalCategory').textContent=p.label+(p.sample?' / DEMO':'');
      document.getElementById('modalTitle').textContent=p.title;
      document.getElementById('modalDescription').textContent=p.description;
      const meta=document.getElementById('modalMeta');meta.replaceChildren();
      meta.append(el('span','',p.role));(p.tools||[]).forEach(t=>meta.append(el('span','',t)));
      document.getElementById('modalNotes').textContent=p.notes||'';
      renderAttachments(document.getElementById('projectExtraMedia'),p.attachments||[],{title:'專案圖輯與附件'});
      const link=document.getElementById('modalLink');link.hidden=!p.url;if(p.url){link.href=p.url;link.target='_blank';link.rel='noopener noreferrer'}else link.removeAttribute('href');const fileLink=document.getElementById('modalFileLink');fileLink.hidden=!p.fileUrl;if(p.fileUrl){fileLink.href=p.fileUrl}else fileLink.removeAttribute('href');
      modal.setAttribute('aria-hidden','false');body.classList.add('modal-open');closeBtn.focus();
    }
    function closeProject(){if(modal.getAttribute('aria-hidden')==='true')return;modal.setAttribute('aria-hidden','true');body.classList.remove('modal-open');document.getElementById('modalImage').removeAttribute('src');projectLastFocus?.focus()}
    closeBtn.addEventListener('click',closeProject);modal.addEventListener('click',e=>{if(e.target===modal)closeProject()});
    function trapTab(e,root){const focusable=[...root.querySelectorAll('button:not([disabled]),a[href],video[controls]')].filter(x=>!x.hidden);if(!focusable.length)return;
      if(e.shiftKey&&document.activeElement===focusable[0]){e.preventDefault();focusable[focusable.length-1].focus()}
      else if(!e.shiftKey&&document.activeElement===focusable[focusable.length-1]){e.preventDefault();focusable[0].focus()}}
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'){closePhoto();closeVideo();closeProject();return}
      if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)||e.target.isContentEditable)return;
      if(photoLightbox.getAttribute('aria-hidden')==='false'){
        if(e.key==='ArrowRight')shiftPhoto(1);if(e.key==='ArrowLeft')shiftPhoto(-1);
        if(e.key==='Tab')trapTab(e,photoLightbox);return;
      }
      if(e.key==='Tab'&&videoModal.getAttribute('aria-hidden')==='false')trapTab(e,videoModal);
      else if(e.key==='Tab'&&modal.getAttribute('aria-hidden')==='false')trapTab(e,modal);
    });
    const menuToggle=document.getElementById('menuToggle'),menu=document.getElementById('menu');
    menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'關閉選單':'開啟選單');menuToggle.textContent=open?'×':'☰'});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuToggle.textContent='☰';menuToggle.setAttribute('aria-expanded','false')}));
    if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e))}
    else document.querySelectorAll('.reveal').forEach(e=>e.classList.add('visible'));
    document.getElementById('emailLink').href='mailto:'+CONTACT.email;
    document.getElementById('emailArrow').href='mailto:'+CONTACT.email;
    document.getElementById('instagramLink').href=CONTACT.instagram;
    document.getElementById('githubLink').href=CONTACT.github;
    document.getElementById('year').textContent=new Date().getFullYear();
    renderPhotos();renderVideos();renderProjects();
    // 各類別只要有正式發布作品，就以該類別的雲端作品取代預設展示內容。
    window.applyCloudPortfolio=(records)=>{
      const gallery=x=>Array.isArray(x.media_items)&&x.media_items.length?x.media_items.filter(m=>m.url):[];
      const livePhotos=records.filter(x=>x.kind==='photo' && (x.cover_url||gallery(x).some(m=>m.type==='image'))).map(x=>{
        const images=gallery(x).filter(m=>m.type==='image');
        return {src:x.cover_url||images[0]?.url,title:x.title,category:x.category||'details',info:x.subtitle||'',description:x.description||'',externalUrl:x.external_url||'',images, demo:false};
      });
      const liveVideos=records.filter(x=>x.kind==='video').map(x=>{
        const media=gallery(x),firstVideo=media.find(m=>m.type==='video');
        return {title:x.title,type:x.subtitle||'影片',year:x.year||'',duration:x.category||'FILM',poster:x.cover_url||media.find(m=>m.type==='image')?.url||'demo-photo-05.jpg',videoUrl:firstVideo?.url||x.media_url||x.external_url||'',description:x.description||'',attachments:media.filter(m=>m.url!==firstVideo?.url),demo:false};
      });
      const liveProjects=records.filter(x=>x.kind==='project').map(x=>{
        const media=gallery(x);
        return {title:x.title,label:'PROJECT / '+(x.year||''),category:[x.category||'design'],type:x.subtitle||'個人專案',image:x.cover_url||media.find(m=>m.type==='image')?.url||'art:material',fallback:'linear-gradient(135deg,#77746b,#c5b39a)',description:x.description||'',role:x.role||'個人創作',tools:x.tools||[],notes:x.notes||'',url:x.external_url||'',fileUrl:x.media_url||'',attachments:media,sample:false};
      });
      if(livePhotos.length)PHOTOS.splice(0,PHOTOS.length,...livePhotos);
      if(liveVideos.length)VIDEOS.splice(0,VIDEOS.length,...liveVideos);
      if(liveProjects.length)PROJECTS.splice(0,PROJECTS.length,...liveProjects);
      renderPhotos();renderVideos();renderProjects();
    };
