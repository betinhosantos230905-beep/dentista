const $=s=>document.querySelector(s),N='5543988128998';
const bx=(i,t,p)=>`<article class="bx rv"><i>${String(i).padStart(2,'0')}</i><h3>${t}</h3><p>${p}</p></article>`;
const SV=[['Clareamento dental','Sorriso mais claro, com acompanhamento profissional.'],['Facetas e lentes','Harmonia e naturalidade para o seu sorriso.'],['Limpeza e prevenção','Cuidado regular para manter a saúde bucal.'],['Avaliação e planejamento','Uma conversa para entender o que você precisa.']];
$('#tl').innerHTML=SV.map((s,i)=>`<a class="rv" data-wa="Olá! Tenho interesse em: ${s[0]}."><i>${String(i+1).padStart(2,'0')}</i><span>${s[0]}<em>${s[1]}</em></span></a>`).join('');
document.addEventListener('click',e=>{const a=e.target.closest('[data-wa]');if(a)window.open('https://wa.me/'+N+'?text='+encodeURIComponent(a.dataset.wa),'_blank','noopener')});
let done=0;function open(){if(done)return;done=1;$('#intro').classList.add('go');document.body.classList.remove('lock');setTimeout(()=>document.body.classList.add('ready'),500);setTimeout(()=>$('#intro').remove(),1400)}
setTimeout(open,4300);$('#skip').onclick=open;
document.querySelectorAll('.bxg,.grid,.gal').forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty('--dl',(i%3)*.12+'s')));
document.querySelectorAll('.bx,.emp').forEach(e=>e.classList.add('z'));document.querySelectorAll('.grid a').forEach((e,i)=>e.classList.add(i%2?'r':'l'));
const o=new IntersectionObserver(es=>es.forEach(x=>x.target.classList.toggle('in',x.isIntersecting)),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
const obs=()=>document.querySelectorAll('.rv').forEach(n=>o.observe(n));obs();
const m=$('#menu'),b=$('#bg'),tg=f=>{m.classList.toggle('o',f);b.classList.toggle('o',f)};b.onclick=()=>tg(!m.classList.contains('o'));m.onclick=e=>{if(e.target.tagName=='A')tg(false)};

document.querySelectorAll('.cmp').forEach(c=>{const a=c.querySelector('.a'),b=c.querySelector('.b'),l=c.querySelector('.l1'),t=c.querySelector('.tp');a.src=b.src;c.onclick=()=>{const on=c.classList.toggle('on');l.textContent=on?'Depois':'Antes';t.textContent=on?'Toque para ver o antes':'Toque para ver o depois'}});
const AD='';document.querySelectorAll('.mp').forEach(a=>a.onclick=e=>{e.preventDefault();if(AD)window.open('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(AD),'_blank','noopener')});
const lx=$('#lbx');document.querySelectorAll('figure img').forEach(i=>i.onclick=()=>{lx.firstElementChild.src=i.src;lx.classList.add('o')});lx.onclick=()=>lx.classList.remove('o');