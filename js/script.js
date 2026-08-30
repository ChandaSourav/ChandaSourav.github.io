const menu=document.getElementById('menu'), links=document.getElementById('navlinks');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.card').forEach(card=>{
 card.addEventListener('mousemove',e=>{
   const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
   card.style.transform=`perspective(900px) rotateX(${-y*2}deg) rotateY(${x*2}deg) translateY(-5px)`;
 });
 card.addEventListener('mouseleave',()=>card.style.transform='');
});

const progress=document.getElementById('scrollProgress');
if(progress){window.addEventListener('scroll',()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max>0?(scrollY/max)*100:0)+'%';},{passive:true});}
