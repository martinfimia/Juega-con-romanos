const PREFIX='aula-play:';
export function load(key,fallback){try{return JSON.parse(localStorage.getItem(PREFIX+key))??fallback}catch{return fallback}}
export function save(key,value){localStorage.setItem(PREFIX+key,JSON.stringify(value))}
export function reset(key){localStorage.removeItem(PREFIX+key)}
