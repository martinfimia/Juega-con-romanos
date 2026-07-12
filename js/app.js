import{initRoman}from'./modules/roman.js?v=20260712';
import{initReading}from'./modules/reading.js?v=20260712';
import{setSound,isSoundOn}from'./core/sounds.js?v=20260712';

const views=[...document.querySelectorAll('.view')];
const romanSections=['roman-levels','roman-lessons','roman-practice','roman-group','roman-challenge'];

function show(id,{updateHash=true,scrollTop=true}={}){
  const target=document.getElementById(id)||document.getElementById('home');
  views.forEach(view=>{const active=view===target;view.classList.toggle('active',active);view.hidden=!active});
  if(updateHash)history.replaceState(null,'',id==='home'?'./':`#${id}`);
  if(scrollTop)window.scrollTo({top:0,behavior:'smooth'});
  document.title=id==='home'?'Aula Play — Aprender también puede ser un juego':`${target.querySelector('h1')?.textContent||'Aula Play'} — Aula Play`;
}

function handleHash(){
  const hash=location.hash.slice(1);
  if(romanSections.includes(hash)){
    show('romanos',{updateHash:false,scrollTop:false});
    requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView({behavior:'smooth'}));
    return;
  }
  show(['romanos','lectura'].includes(hash)?hash:'home',{updateHash:false});
}

document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>show(button.dataset.go)));
const soundButton=document.querySelector('#sound-toggle');
soundButton.onclick=()=>{setSound(!isSoundOn());soundButton.setAttribute('aria-pressed',isSoundOn());soundButton.textContent=isSoundOn()?'♪ Sonido':'× Sonido'};

initRoman();
initReading();
handleHash();
window.addEventListener('hashchange',handleHash);
