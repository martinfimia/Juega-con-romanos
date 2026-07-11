let enabled=true;
export function setSound(value){enabled=value}
export function isSoundOn(){return enabled}
export function tone(kind='success'){if(!enabled)return;const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;const ctx=new Audio(),osc=ctx.createOscillator(),gain=ctx.createGain();osc.frequency.value=kind==='success'?660:kind==='next'?480:210;gain.gain.setValueAtTime(.055,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.18);osc.connect(gain).connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.18)}
export function speak(word){if(!enabled||!('speechSynthesis'in window))return;window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(word);utterance.lang='es-ES';utterance.rate=.72;utterance.pitch=1.12;window.speechSynthesis.speak(utterance)}
