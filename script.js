document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}})});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const profileCaption=document.querySelector('.art-caption');
if(profileCaption){const label=profileCaption.querySelector('small');const name=profileCaption.querySelector('strong');if(label)label.textContent='GRAPHIC DESIGNER';if(name)name.textContent='ASHIKE RASUL MAHADI';}
const artTag=document.querySelector('.art-tag');
if(artTag)artTag.innerHTML='<strong>→ IDEA<br>→ DESIGN<br>→ IMPACT</strong>';
const experienceCards=document.querySelectorAll('.experience-card');
experienceCards.forEach(card=>{const button=card.querySelector('.role-action');const setOpen=open=>{card.classList.toggle('open',open);if(button){button.setAttribute('aria-expanded',open?'true':'false');button.querySelector('span').textContent=open?'↗':'＋';}};if(button){button.addEventListener('click',e=>{e.stopPropagation();setOpen(!card.classList.contains('open'));});}card.addEventListener('click',e=>{if(e.target.closest('button,a')) return;setOpen(!card.classList.contains('open'));});});
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.08;const y=(e.clientY-r.top-r.height/2)*.08;el.style.transform=`translate(${x}px,${y}px)`});el.addEventListener('mouseleave',()=>el.style.transform='')})}
const experienceStyle=document.createElement('style');
experienceStyle.textContent=`
.experience-section{background:#f7f4ed;padding-top:125px;padding-bottom:125px}.experience-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;align-items:start}.experience-card{background:#fff;border:1px solid #ddd6ca;border-radius:18px;padding:28px;min-height:238px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 12px 35px rgba(23,24,23,.045);transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s ease,border-color .3s ease,background .3s ease;position:relative;z-index:1;cursor:pointer}.experience-card:hover{transform:translateY(-7px);box-shadow:0 24px 55px rgba(23,24,23,.11);border-color:#b99a70}.experience-card.open{border-color:#a57a43;box-shadow:0 30px 75px rgba(23,24,23,.15);transform:translateY(-10px) scale(1.012);z-index:10;background:#fffefa}.experience-card.open:not(:last-child){grid-column:span 2}.experience-card:nth-child(5){grid-column:1/-1}.experience-card:nth-child(5).open{grid-column:1/-1}.role-top{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.role-top time{display:block;font-size:9px;letter-spacing:1.5px;font-weight:700;color:#a57a43;margin-bottom:11px}.role-top h3{font-family:'Space Grotesk';font-size:24px;line-height:1.08;letter-spacing:-.8px}.role-top p{font-size:11px;color:#777;margin-top:7px}.role-action{border:1px solid #cfc7ba;background:#f7f4ed;color:#252825;border-radius:100px;padding:10px 13px;font:700 10px 'DM Sans',sans-serif;white-space:nowrap;cursor:pointer;transition:.25s;flex-shrink:0}.role-action:hover,.experience-card.open .role-action{background:#17201e;color:#fff;border-color:#17201e}.role-action span{margin-left:6px}.role-details{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .45s cubic-bezier(.2,.8,.2,1),opacity .25s ease,margin-top .35s ease;margin-top:0}.role-details>*{overflow:hidden}.experience-card.open .role-details{grid-template-rows:1fr;opacity:1;margin-top:24px}.role-details p{font-size:12px;color:#5f605d;margin-bottom:12px;max-width:820px}.role-details ul{padding-left:17px;color:#70716d;font-size:11px;line-height:1.85;max-width:900px}.experience-card:after{content:'CLICK TO EXPAND';position:absolute;right:28px;bottom:18px;font-size:7px;letter-spacing:1.5px;color:#aaa;opacity:.8;transition:.2s}.experience-card.open:after{content:'CLICK TO COLLAPSE';color:#a57a43}.experience-card.open .role-details:before{content:'RESPONSIBILITIES & SCOPE';display:block;font-size:8px;letter-spacing:1.6px;font-weight:700;color:#a57a43;margin-bottom:10px}
.art-tag{width:142px;height:142px;left:-42px;right:auto;bottom:90px;border-radius:50%;padding:20px;text-align:center;display:flex;align-items:center;justify-content:center;font-size:8px;letter-spacing:1px;line-height:1.25}.art-tag strong{font-family:Arial,Helvetica,sans-serif;font-size:9px;line-height:1.8;letter-spacing:1px;font-weight:700;color:#fff;white-space:nowrap}.art-tag span{display:none}
@media(max-width:1050px){.art-tag{left:-25px;right:auto}}@media(max-width:900px){.experience-grid{grid-template-columns:1fr}.experience-card.open,.experience-card.open:not(:last-child),.experience-card:nth-child(5),.experience-card:nth-child(5).open{grid-column:auto}.experience-card.open{transform:translateY(-5px) scale(1.005)}.art-tag{left:-18px;right:auto;bottom:65px}}@media(max-width:650px){.experience-section{padding-top:80px;padding-bottom:80px}.experience-card{padding:21px;border-radius:14px;min-height:210px}.role-top{display:block}.role-action{margin-top:18px}.role-top h3{font-size:20px}.experience-card:after{right:21px;bottom:14px;font-size:6px}.art-tag{left:-7px;right:auto;bottom:48px;width:104px;height:104px;padding:12px;font-size:7px;line-height:1.15;letter-spacing:.8px}.art-tag strong{font-size:7px;line-height:1.65;letter-spacing:.7px}}
`;
document.head.appendChild(experienceStyle);


const projectDetails=[
 {title:'Universe Pet Care — Logo Design',role:'Logo & Identity Design',tools:'Adobe Illustrator · Adobe Photoshop',deliverables:'Logo concept · Final brand mark · Identity direction',note:'A friendly, memorable identity designed for practical brand use across customer-facing materials.'},
 {title:'Universe Pet Care — Brand Cover',role:'Brand Identity & Marketing Design',tools:'Adobe Photoshop · Adobe Illustrator',deliverables:'Branded cover · Visual composition · Marketing artwork',note:'Extended the identity into a clear promotional visual while keeping the brand recognizable and consistent.'},
 {title:'Professional Email Signature',role:'Business Identity Design',tools:'Adobe Photoshop · Adobe Illustrator',deliverables:'Email signature artwork · Contact hierarchy · Digital-ready visual',note:'Designed a clean professional signature system for consistent business communication.'},
 {title:'Bashundhara Night Delivery',role:'Video & Promotional Motion',tools:'Video editing · Graphic design',deliverables:'Promotional video · Motion graphics · Campaign visual',note:'Combined graphic design and video editing to communicate a real promotional message.'},
 {title:'Promotional Poster',role:'Marketing Creative',tools:'Adobe Photoshop · Adobe Illustrator',deliverables:'Offer creative · Product emphasis · Promotional artwork',note:'Created with a commercial focus: clear message, strong visual impact and brand alignment.'},
 {title:'Product Poster',role:'Product Marketing Design',tools:'Adobe Photoshop · Adobe Illustrator',deliverables:'Product visual · Promotional composition · Advertising artwork',note:'Product-focused visual communication for online and offline promotion.'},
 {title:'Social Media Design',role:'Social & Digital Creative',tools:'Adobe Photoshop · Adobe Illustrator',deliverables:'Facebook posts · Campaign graphics · Digital creatives',note:'Designed for attention, clarity and campaign consistency across social content.'},
 {title:'Banner Design',role:'Banner & Advertising Design',tools:'Adobe Photoshop · Adobe Illustrator',deliverables:'Digital banners · Promotional banners · Print artwork',note:'Production-aware layouts prepared for practical display and print requirements.'},
 {title:'Packaging Design',role:'Packaging & Label Design',tools:'Adobe Illustrator · Adobe Photoshop',deliverables:'Packaging layout · Labels · Product presentation',note:'Balanced visual appeal with practical product presentation requirements.'},
 {title:'Business Card Design',role:'Business Material Design',tools:'Adobe Illustrator · Adobe Photoshop',deliverables:'Business cards · Contact materials · Personal/corporate branding',note:'Clean, professional materials designed for real-world use and printing.'},
 {title:'Brochure & Catalog',role:'Editorial & Marketing Design',tools:'Adobe InDesign-style layout thinking · Illustrator · Photoshop',deliverables:'Page layout · Product presentation · Marketing material',note:'Structured information and visuals for clear product or company communication.'},
 {title:'Marketing Creative',role:'Campaign & Advertising Design',tools:'Adobe Photoshop · Adobe Illustrator',deliverables:'Campaign graphics · Ads · Promotional content',note:'Commercial visuals developed around the communication goal and campaign message.'}
];
const workCards=document.querySelectorAll('#work .case');
workCards.forEach((card,i)=>{const d=projectDetails[i];if(!d)return;const info=document.createElement('div');info.className='project-details';info.innerHTML='<div class="project-details-grid"><div><small>MY ROLE</small><strong>'+d.role+'</strong></div><div><small>TOOLS</small><strong>'+d.tools+'</strong></div><div><small>DELIVERABLES</small><strong>'+d.deliverables+'</strong></div></div><p>'+d.note+'</p>';card.appendChild(info);card.addEventListener('click',e=>{if(e.target.closest('a,button'))return;workCards.forEach(other=>{if(other!==card)other.classList.remove('project-open')});card.classList.toggle('project-open')});});
const projectStyle=document.createElement('style');projectStyle.textContent=`
.project-details{max-height:0;overflow:hidden;opacity:0;transition:max-height .45s ease,opacity .3s ease,margin-top .35s ease;padding:0 1px}.project-open .project-details{max-height:420px;opacity:1;margin-top:14px}.project-details-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;border-top:1px solid #d8d1c6;padding-top:14px}.project-details-grid div{display:flex;flex-direction:column;gap:5px}.project-details-grid small{font-size:7px;letter-spacing:1.4px;color:#a57a43;font-weight:700}.project-details-grid strong{font-size:10px;line-height:1.4;font-weight:600;color:#555}.project-details>p{font-size:10px;color:#777;margin-top:12px;max-width:720px}.project-open{transform:translateY(-7px)}.project-open .case-info h3{color:#a57a43}.real-world-proof{padding-top:0!important;display:grid;grid-template-columns:.8fr 1.2fr;gap:60px;align-items:start}.proof-heading h2{font-family:'Space Grotesk';font-size:clamp(37px,4.8vw,62px);line-height:1;letter-spacing:-3px}.proof-heading h2 span{color:#777}.proof-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #c8c1b5}.proof-grid article{padding:20px 18px 10px 0;border-right:1px solid #c8c1b5;min-height:190px}.proof-grid article+article{padding-left:18px}.proof-grid article:last-child{border-right:0}.proof-grid span{font-size:9px;color:#a57a43;font-weight:700}.proof-grid h3{font-family:'Space Grotesk';font-size:18px;line-height:1.1;margin:42px 0 9px}.proof-grid p{font-size:11px;color:#666;line-height:1.6}.case{cursor:pointer}.case.project-open .placeholder{box-shadow:0 18px 45px rgba(23,32,30,.12)}
@media(max-width:900px){.real-world-proof{grid-template-columns:1fr;gap:35px}.proof-grid{grid-template-columns:1fr}.proof-grid article{border-right:0;border-bottom:1px solid #c8c1b5;padding:18px 0}.proof-grid article+article{padding-left:0}.proof-grid article:last-child{border-bottom:0}.project-details-grid{grid-template-columns:1fr}.project-open{transform:translateY(-4px)}}
@media(max-width:650px){.real-world-proof{padding-top:0!important}.proof-grid h3{margin-top:24px}}
`;document.head.appendChild(projectStyle);
const videoCard=document.querySelector('#work .case:nth-child(8)');
if(videoCard){
 const placeholder=videoCard.querySelector('.placeholder');
 if(placeholder){
  placeholder.classList.add('portfolio-video');
  placeholder.innerHTML='<video src="assets/Bashundhara%20Night%20Delivery%20A-Z.mp4" muted loop playsinline preload="metadata"></video><div class="portfolio-video-label"><small>08 · VIDEO / MOTION</small><span>Bashundhara Night Delivery</span></div>';
  const v=placeholder.querySelector('video');
  if(v){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)v.play().catch(()=>{});else v.pause()}),{threshold:.35});io.observe(videoCard);}
 }
}

// Verified portfolio video: play only while visible.
const workVideo=document.querySelector('#work .case:nth-child(4) video');
if(workVideo){
  const playVideo=()=>workVideo.play().catch(()=>{});
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)playVideo();else workVideo.pause()}),{threshold:.35});
    videoObserver.observe(workVideo);
  }
}

// PORTFOLIO PICTURE GALLERY
(() => {
  const modal = document.querySelector('#portfolioGallery');
  const mainArt = document.querySelector('#galleryMainArt');
  const thumbs = document.querySelector('#galleryThumbs');
  const counter = document.querySelector('#galleryCounter');
  if (!modal || !mainArt || !thumbs) return;

  const sourceCards = [...document.querySelectorAll('.demo-card')];
  const galleryItems = sourceCards.slice(0, 6).map((card, i) => ({
    title: card.querySelector('strong')?.textContent || 'Design Work',
    type: card.querySelector('small')?.textContent || ('0' + (i + 1)),
    html: card.querySelector('.demo-art')?.innerHTML || ''
  }));
  galleryItems.push(
    {title:'Universe Pet Care Logo', type:'07 · BRANDING', src:'assets/UNIVERSE%20PET%20CARE%20Logo.jpg'},
    {title:'Professional Email Signature', type:'08 · BUSINESS IDENTITY', src:'assets/HTML%20Email%20Signature%20Profational-01.jpg'}
  );

  let current = 0;
  const render = (index) => {
    current = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[current];
    mainArt.innerHTML = item.html ? item.html : '<img src="'+item.src+'" alt="'+item.title+'">';
    counter.textContent = String(current + 1).padStart(2,'0') + ' / ' + String(galleryItems.length).padStart(2,'0');
    thumbs.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===current));
  };
  const open = (index=0) => {
    render(index);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('gallery-open');
  };
  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('gallery-open');
  };

  galleryItems.forEach((item,i) => {
    const b=document.createElement('button');
    b.type='button';
    b.className='gallery-thumb';
    b.setAttribute('aria-label','Open '+item.title);
    b.innerHTML=item.html || '<img src="'+item.src+'" alt="">';
    b.addEventListener('click',()=>render(i));
    thumbs.appendChild(b);
  });

  sourceCards.forEach((card,i)=>card.addEventListener('click',e=>{
    if(e.target.closest('a,button')) return;
    open(i);
  }));
  document.querySelectorAll('[data-gallery-close]').forEach(el=>el.addEventListener('click',close));
  document.querySelector('.gallery-prev')?.addEventListener('click',()=>render(current-1));
  document.querySelector('.gallery-next')?.addEventListener('click',()=>render(current+1));
  document.addEventListener('keydown',e=>{
    if(!modal.classList.contains('is-open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') render(current-1);
    if(e.key==='ArrowRight') render(current+1);
  });

  const style=document.createElement('style');
  style.textContent=`
  body.gallery-open{overflow:hidden}
  .portfolio-gallery-modal{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;padding:22px}
  .portfolio-gallery-modal.is-open{display:flex}
  .gallery-backdrop{position:absolute;inset:0;background:rgba(10,14,13,.88);backdrop-filter:blur(10px)}
  .gallery-panel{position:relative;width:min(1180px,96vw);max-height:94vh;background:#f7f4ed;border:1px solid rgba(255,255,255,.15);border-radius:24px;padding:22px;box-shadow:0 35px 100px rgba(0,0,0,.4);display:flex;flex-direction:column;gap:15px}
  .gallery-close{position:absolute;right:15px;top:12px;width:42px;height:42px;border:0;border-radius:50%;background:#17201e;color:#fff;font-size:28px;line-height:1;cursor:pointer;z-index:3}
  .gallery-top{display:flex;justify-content:space-between;align-items:flex-end;padding-right:55px}
  .gallery-top small{display:block;font-size:8px;letter-spacing:2px;color:#a57a43;font-weight:700;margin-bottom:6px}
  .gallery-top strong{font-family:'Space Grotesk';font-size:25px}
  .gallery-top span{font-size:10px;letter-spacing:1.5px;color:#777}
  .gallery-main{display:grid;grid-template-columns:48px 1fr 48px;align-items:center;gap:12px;min-height:0}
  .gallery-main-art{height:min(62vh,650px);display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:18px;background:#ebe6dc}
  .gallery-main-art svg,.gallery-main-art img{width:100%;height:100%;object-fit:contain;display:block}
  .gallery-nav{width:44px;height:44px;border-radius:50%;border:1px solid #d2cabd;background:#fff;color:#17201e;font-size:34px;line-height:1;cursor:pointer}
  .gallery-nav:hover{background:#17201e;color:#fff}
  .gallery-thumbs{display:grid;grid-template-columns:repeat(8,1fr);gap:8px;overflow:auto;padding-bottom:2px}
  .gallery-thumb{height:74px;border:1px solid #d7d0c4;background:#ebe6dc;border-radius:10px;overflow:hidden;padding:0;cursor:pointer;opacity:.62;transition:.2s}
  .gallery-thumb.active{opacity:1;border:2px solid #a57a43}
  .gallery-thumb svg,.gallery-thumb img{width:100%;height:100%;object-fit:cover;display:block}
  .demo-card{cursor:pointer}
  @media(max-width:700px){
    .portfolio-gallery-modal{padding:10px}.gallery-panel{padding:13px;border-radius:17px}.gallery-main{grid-template-columns:34px 1fr 34px;gap:6px}.gallery-main-art{height:55vh}.gallery-nav{width:34px;height:34px;font-size:27px}.gallery-thumbs{grid-template-columns:repeat(4,1fr)}.gallery-thumb{height:60px}.gallery-top strong{font-size:20px}.gallery-top span{font-size:8px}
  }`;
  document.head.appendChild(style);
})();
