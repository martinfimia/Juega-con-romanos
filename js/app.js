import{initRoman}from'./modules/roman.js';import{initReading}from'./modules/reading.js';import{setSound,isSoundOn}from'./core/sounds.js';
const views=[...document.querySelectorAll('.view')];
function show(id,{updateHash=true}={}){const target=document.getElementById(id)||document.getElementById('home');views.forEach(view=>{const active=view===target;view.classList.toggle('active',active);view.hidden=!active});if(updateHash)history.replaceState(null,'',id==='home'?'./':`#${id}`);window.scrollTo({top:0,behavior:'smooth'});document.title=id==='home'?'Aula Play — Aprender también puede ser un juego':`${target.querySelector('h1')?.textContent||'Aula Play'} — Aula Play`}
document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>show(button.dataset.go)));
const soundButton=document.querySelector('#sound-toggle');soundButton.onclick=()=>{setSound(!isSoundOn());soundButton.setAttribute('aria-pressed',isSoundOn());soundButton.textContent=isSoundOn()?'♪ Sonido':'× Sonido'};
initRoman();initReading();
const initial=location.hash.slice(1);show(['romanos','lectura'].includes(initial)?initial:'home',{updateHash:false});
window.addEventListener('hashchange',()=>show(location.hash.slice(1)||'home',{updateHash:false}));
