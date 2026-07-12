import{load,save,reset}from'../core/storage.js?v=20260712';
import{tone,speak}from'../core/sounds.js?v=20260712';
import{readingWords,readingLevels}from'../data/reading-data.js?v=20260712';

const $=s=>document.querySelector(s);
let state=load('reading',{hits:0,attempts:0,best:0,completed:0});
state.completed??=0;
let activeLevel=Math.min(state.completed+1,readingLevels.length),roundHits=0,streak=0,current=null,solved=false,lastWord='';

function shuffle(values){return[...values].sort(()=>Math.random()-.5)}
function levelWords(){return readingLevels[activeLevel-1].map(word=>readingWords.find(item=>item.word===word))}
function persist(){state.best=Math.max(state.best,streak);save('reading',state);$('#reading-hits').textContent=state.hits;$('#reading-streak').textContent=state.best;$('#reading-attempts').textContent=`${state.attempts} intento${state.attempts===1?'':'s'}`;renderLevels()}
function renderLevels(){const box=$('#reading-levels');box.innerHTML='';readingLevels.forEach((_,index)=>{const number=index+1,open=number<=state.completed+1,done=number<=state.completed;const button=document.createElement('button');button.className=`reading-level${number===activeLevel?' active':''}${done?' done':''}`;button.disabled=!open;button.textContent=done?`${number} ★`:open?String(number):`${number} 🔒`;button.onclick=()=>{activeLevel=number;roundHits=0;renderLevels();next()};box.appendChild(button)})}
function showPicture(){const picture=$('#reading-picture');picture.innerHTML=current.art||current.icon;picture.setAttribute('aria-label',current.alt)}
function next(){const choices=levelWords().filter(item=>item.word!==lastWord),pool=choices.length?choices:levelWords();current=pool[Math.floor(Math.random()*pool.length)];lastWord=current.word;solved=false;showPicture();$('#reading-round').textContent=`Nivel ${activeLevel} · ${roundHits} de 4`;$('#reading-feedback').textContent='Elige una palabra';$('#reading-next').hidden=true;$('#reading-next').textContent='Siguiente →';delete $('#reading-next').dataset.level;const box=$('#reading-choices');box.innerHTML='';shuffle(current.choices).forEach(word=>{const button=document.createElement('button');button.className='word-choice';button.textContent=word;button.onclick=()=>choose(word,button);box.appendChild(button)})}
function choose(word,button){if(solved)return;state.attempts++;if(word===current.word){solved=true;state.hits++;streak++;roundHits++;button.classList.add('correct');document.querySelectorAll('.word-choice').forEach(item=>item.disabled=true);tone();speak(current.word);if(roundHits>=4){state.completed=Math.max(state.completed,activeLevel);$('#reading-feedback').textContent=`¡Nivel ${activeLevel} superado! ⭐`;$('#reading-next').textContent=activeLevel<readingLevels.length?`Ir al nivel ${activeLevel+1} →`:'Volver a jugar';$('#reading-next').dataset.level='done'}else $('#reading-feedback').textContent='¡Muy bien! ⭐';$('#reading-next').hidden=false}else{streak=0;button.classList.add('wrong');button.disabled=true;$('#reading-feedback').textContent='Prueba otra vez';tone('error')}persist()}
function advance(){if($('#reading-next').dataset.level){if(activeLevel<readingLevels.length)activeLevel++;roundHits=0;renderLevels()}next()}
export function initReading(){persist();next();$('#reading-next').onclick=advance;$('#reading-listen').onclick=()=>speak(current.word);$('#reading-reset').onclick=()=>{if(window.confirm('¿Reiniciar los aciertos, intentos y niveles?')){state={hits:0,attempts:0,best:0,completed:0};activeLevel=1;roundHits=0;streak=0;lastWord='';reset('reading');persist();next()}}}
