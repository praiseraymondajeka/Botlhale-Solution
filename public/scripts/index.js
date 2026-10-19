(() => {
/* Header */
const hdr=document.getElementById('hdr');
window.addEventListener('scroll',()=>{
  hdr.classList.toggle('sc',window.scrollY>60);
  document.getElementById('bt').classList.toggle('v',window.scrollY>400);
});

/* Mobile menu */
const hbg=document.getElementById('hbg'),mm=document.getElementById('mm');
hbg.addEventListener('click',()=>{hbg.classList.toggle('op');mm.classList.toggle('op');});
mm.querySelectorAll('.ml,.btn').forEach(el=>el.addEventListener('click',()=>{hbg.classList.remove('op');mm.classList.remove('op');}));

/* Slider */
const slides=document.querySelectorAll('.sl'),dots=document.querySelectorAll('.hd2');
const bgs=['https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070','https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2070','https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070'];
let cur=0,tmr;
function go(n){
  slides[cur].classList.remove('ac');dots[cur].classList.remove('ac');
  cur=(n+slides.length)%slides.length;
  slides[cur].classList.add('ac');dots[cur].classList.add('ac');
  document.getElementById('bgImg').style.backgroundImage=`url('${bgs[cur]}')`;
}
function auto(){clearInterval(tmr);tmr=setInterval(()=>go(cur+1),6000);}
dots.forEach(d=>d.addEventListener('click',()=>{go(+d.dataset.sl);auto();}));
auto();

/* Counters */
function cnt(el){
  const t=+el.dataset.count,s=el.dataset.sfx||'+';
  let v=0;const step=t/(1800/16);
  const i=setInterval(()=>{v=Math.min(v+step,t);el.textContent=Math.floor(v).toLocaleString()+s;if(v>=t)clearInterval(i);},16);
}
let done=false;
new IntersectionObserver(([e])=>{if(e.isIntersecting&&!done){done=true;document.querySelectorAll('.num[data-count]').forEach(cnt);}},{threshold:0.4}).observe(document.querySelector('.hctr'));

/* Reveal */
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('iv');ro.unobserve(e.target);}});
},{threshold:0.1});
document.querySelectorAll('.rv,.rl,.rr').forEach(el=>ro.observe(el));

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const t=document.querySelector(a.getAttribute('href'));
  if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
}));

/* Back top */
document.getElementById('bt').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* Newsletter */
document.getElementById('nlb').addEventListener('click',()=>{
  const e=document.getElementById('nle').value.trim(),b=document.getElementById('nlb');
  if(e&&e.includes('@')){b.textContent='✓ Subscribed!';b.style.background='#1a6e38';setTimeout(()=>{b.textContent='Subscribe';b.style.background='';document.getElementById('nle').value='';},3000);}
  else{b.textContent='Enter valid email';b.style.background='#7a1a1a';setTimeout(()=>{b.textContent='Subscribe';b.style.background='';},2500);}
});
})();
