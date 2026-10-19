(() => {
/* ---- Header ---- */
const hdr=document.getElementById('hdr');
window.addEventListener('scroll',()=>{
  hdr.classList.toggle('sc',window.scrollY>60);
  document.getElementById('bt').classList.toggle('v',window.scrollY>400);
});

/* ---- Mobile menu ---- */
const hbg=document.getElementById('hbg'),mm=document.getElementById('mm');
hbg.addEventListener('click',()=>{hbg.classList.toggle('op');mm.classList.toggle('op');});
mm.querySelectorAll('a').forEach(el=>el.addEventListener('click',()=>{hbg.classList.remove('op');mm.classList.remove('op');}));

/* ---- Service selector ---- */
const ssBtns=document.querySelectorAll('.ss-btn');
ssBtns.forEach(b=>b.addEventListener('click',()=>{
  ssBtns.forEach(x=>x.classList.remove('sel'));
  b.classList.add('sel');
  document.getElementById('selectedService').value=b.dataset.svc;
}));

/* ---- FAQ accordion ---- */
document.querySelectorAll('.faq-item').forEach(item=>{
  item.querySelector('.faq-q').addEventListener('click',()=>{
    const isOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});

/* ---- Form submission ---- */
document.getElementById('submitBtn').addEventListener('click',()=>{
  const fn=document.getElementById('firstName').value.trim();
  const ln=document.getElementById('lastName').value.trim();
  const em=document.getElementById('emailField').value.trim();
  const ph=document.getElementById('phoneField').value.trim();
  const co=document.getElementById('companyField').value.trim();
  const sc=document.getElementById('sectorField').value;
  const ms=document.getElementById('messageField').value.trim();
  const cb=document.getElementById('consentBox').checked;
  const svc=document.getElementById('selectedService').value;
  const urg=document.querySelector('input[name="urgency"]:checked')?.value||'standard';

  /* Validation */
  if(!fn||!ln){alert('Please enter your full name.');return;}
  if(!em||!em.includes('@')){alert('Please enter a valid email address.');return;}
  if(!ph){alert('Please enter your phone number.');return;}
  if(!co){alert('Please enter your company name.');return;}
  if(!sc){alert('Please select your industry sector.');return;}
  if(!ms){alert('Please describe your enquiry or brand challenge.');return;}
  if(!cb){alert('Please confirm your consent to be contacted.');return;}

  /* Loading state */
  const btn=document.getElementById('submitBtn');
  btn.classList.add('loading');
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';

  /* Build mailto */
  const subject=encodeURIComponent(`[${urg.toUpperCase()}] MoneyLot Inquiry — ${svc} — ${co}`);
  const body=encodeURIComponent(
`MONEYLOT — INQUIRY REQUEST
====================================
Name:       ${fn} ${ln}
Email:      ${em}
Phone:      ${ph}
Company:    ${co}
Job Title:  ${document.getElementById('jobField').value.trim()||'Not provided'}
Sector:     ${sc}
Inquiry:    ${svc}
Urgency:    ${urg.charAt(0).toUpperCase()+urg.slice(1)}
Source:     ${document.getElementById('sourceField').value||'Not specified'}

DETAILS / REQUIREMENTS:
${ms}

====================================
Submitted via MoneyLot website contact portal.`
  );

  /* Simulate brief delay then open mail client */
  setTimeout(()=>{
    window.location.href=`mailto:service@moneylot.com?subject=${subject}&body=${body}`;

    /* Show success state */
    const ref='ML-'+Date.now().toString(36).toUpperCase().slice(-6);
    document.getElementById('successEmail').textContent=em;
    document.getElementById('refNum').textContent='Reference: '+ref;
    document.getElementById('formWrapper').style.display='none';
    const succ=document.getElementById('formSuccess');
    succ.classList.add('show');

    btn.classList.remove('loading');
    btn.innerHTML='Send Inquiry <i class="fas fa-arrow-right s-icon"></i>';
  },1200);
});

/* ---- Reset form ---- */
function resetForm(){
  document.getElementById('formWrapper').style.display='block';
  document.getElementById('formSuccess').classList.remove('show');
  document.getElementById('firstName').value='';
  document.getElementById('lastName').value='';
  document.getElementById('emailField').value='';
  document.getElementById('phoneField').value='';
  document.getElementById('companyField').value='';
  document.getElementById('jobField').value='';
  document.getElementById('sectorField').value='';
  document.getElementById('messageField').value='';
  document.getElementById('consentBox').checked=false;
  ssBtns.forEach((b,i)=>{b.classList.toggle('sel',i===0);});
  document.getElementById('selectedService').value='Brand Protection';
}

/* ---- Scroll reveal ---- */
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('iv');ro.unobserve(e.target);}});
},{threshold:0.1});
document.querySelectorAll('.rv,.rl,.rr').forEach(el=>ro.observe(el));

/* ---- Smooth scroll ---- */
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
    b.textContent='Enter valid email';b.style.background='#00234f';
    setTimeout(()=>{b.textContent='Get Industry Alerts';b.style.background='';},2500);
  }
});

document.querySelectorAll('[data-reset-form]').forEach(element => {
  element.addEventListener('click', resetForm);
});

})();
