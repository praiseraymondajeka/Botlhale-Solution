(() => {
/* ---- Header scroll ---- */
const hdr=document.getElementById('hdr');
window.addEventListener('scroll',()=>{
  hdr.classList.toggle('sc',window.scrollY>60);
  document.getElementById('bt').classList.toggle('v',window.scrollY>400);
  /* Update sticky nav top offset when header shrinks */
  const svcNav=document.getElementById('svc-nav');
  if(svcNav) svcNav.style.top = window.scrollY>60 ? '66px' : '80px';
});

/* ---- Mobile menu ---- */
const hbg=document.getElementById('hbg'),mm=document.getElementById('mm');
hbg.addEventListener('click',()=>{hbg.classList.toggle('op');mm.classList.toggle('op');});
mm.querySelectorAll('a').forEach(el=>el.addEventListener('click',()=>{hbg.classList.remove('op');mm.classList.remove('op');}));

/* ---- Service switcher ---- */
const navBtns=document.querySelectorAll('.snb');
const panels=document.querySelectorAll('.svc-panel');

function switchSvc(id){
  panels.forEach(p=>{p.classList.remove('act');});
  navBtns.forEach(b=>{b.classList.remove('act');});
  const p=document.getElementById(id);
  if(p){p.classList.add('act');}
  const b=document.querySelector(`.snb[data-svc="${id}"]`);
  if(b){
    b.classList.add('act');
    /* Scroll button into view in the nav bar */
    b.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  }
  /* Re-trigger reveal for newly active panel */
  setTimeout(()=>{
    p.querySelectorAll('.rv,.rl,.rr').forEach(el=>{
      if(!el.classList.contains('iv')){
        revObs.observe(el);
      }
    });
  },50);
}

function switchAndScroll(id){
  switchSvc(id);
  const svcNav=document.getElementById('svc-nav');
  if(svcNav) svcNav.scrollIntoView({behavior:'smooth',block:'start'});
}

navBtns.forEach(b=>b.addEventListener('click',()=>{
  const id=b.getAttribute('data-svc');
  if(id) switchSvc(id);
}));

/* ---- Counter animation ---- */
function cnt(el){
  const t=+el.dataset.count,s=el.dataset.sfx||'';
  let v=0;const step=t/(1600/16);
  const i=setInterval(()=>{v=Math.min(v+step,t);el.textContent=Math.floor(v).toLocaleString()+s;if(v>=t)clearInterval(i);},16);
}
let done=false;
const strip=document.querySelector('.ph-strip');
if(strip){
  new IntersectionObserver(([e])=>{
    if(e.isIntersecting&&!done){done=true;document.querySelectorAll('.n[data-count]').forEach(cnt);}
  },{threshold:0.3}).observe(strip);
}

/* ---- Scroll reveal ---- */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('iv');revObs.unobserve(e.target);}});
},{threshold:0.1});
document.querySelectorAll('.rv,.rl,.rr').forEach(el=>revObs.observe(el));

/* ---- Smooth scroll for same-page anchors ---- */
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const t=document.querySelector(a.getAttribute('href'));
  if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
}));

/* ---- Back to top ---- */
document.getElementById('bt').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ---- Newsletter ---- */
document.getElementById('nlb').addEventListener('click',()=>{
  const e=document.getElementById('nle').value.trim(),b=document.getElementById('nlb');
  if(e&&e.includes('@')){
    b.textContent='✓ Subscribed!';b.style.background='#1a6e38';
    setTimeout(()=>{b.textContent='Get Industry Alerts';b.style.background='';document.getElementById('nle').value='';},3000);
  }else{
    b.textContent='Enter valid email';b.style.background='#7a1a1a';
    setTimeout(()=>{b.textContent='Get Industry Alerts';b.style.background='';},2500);
  }
});

/* ---- Set initial svc-nav top ---- */
document.getElementById('svc-nav').style.top='80px';

document.querySelectorAll('[data-switch-service]').forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();
    switchAndScroll(element.getAttribute('data-switch-service'));
  });
});

})();
