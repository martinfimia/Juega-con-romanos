const picoArt=`<svg viewBox="0 0 320 240" role="img" aria-label="Pájaro con un pico grande y amarillo"><ellipse cx="145" cy="135" rx="82" ry="65" fill="#62aee8"/><circle cx="190" cy="83" r="55" fill="#78c4f2"/><circle cx="207" cy="70" r="7" fill="#17233c"/><path d="M230 84 L310 112 L230 130 Z" fill="#ffd23f" stroke="#d89b15" stroke-width="5"/><path d="M95 135 Q145 90 178 145 Q128 178 95 135" fill="#397fc0"/><path d="M105 187 L90 218 M155 194 L160 222" stroke="#d88925" stroke-width="8" stroke-linecap="round"/></svg>`;
const mesaArt=`<svg viewBox="0 0 320 240" role="img" aria-label="Una mesa de madera con cuatro patas"><rect x="35" y="75" width="250" height="42" rx="10" fill="#d9974f" stroke="#8d582d" stroke-width="6"/><path d="M65 112 L55 220 M255 112 L265 220 M105 112 L100 205 M215 112 L220 205" stroke="#8d582d" stroke-width="18" stroke-linecap="round"/><path d="M50 92 H270" stroke="#efbd78" stroke-width="7" stroke-linecap="round"/></svg>`;
const paloArt=`<svg viewBox="0 0 320 240" role="img" aria-label="Un único palo recto de madera"><path d="M55 190 Q125 145 172 111 T275 45" fill="none" stroke="#8a552f" stroke-width="28" stroke-linecap="round"/><path d="M62 180 Q130 138 179 102 T268 50" fill="none" stroke="#c98243" stroke-width="11" stroke-linecap="round"/><path d="M174 108 L145 66" stroke="#8a552f" stroke-width="15" stroke-linecap="round"/></svg>`;

export const readingWords=[
 {word:'mano',icon:'✋',alt:'Una mano abierta',choices:['mano','mesa','moto']},
 {word:'mapa',icon:'🗺️',alt:'Un mapa',choices:['mapa','pato','pelo']},
 {word:'mesa',art:mesaArt,alt:'Una mesa de madera con cuatro patas',choices:['mesa','mano','pera']},
 {word:'mono',icon:'🐒',alt:'Un mono',choices:['mono','moto','pico']},
 {word:'moto',icon:'🏍️',alt:'Una moto',choices:['moto','mapa','palo']},
 {word:'palo',art:paloArt,alt:'Un único palo recto de madera',choices:['palo','pato','pico']},
 {word:'pato',icon:'🦆',alt:'Un pato',choices:['pato','pelo','mano']},
 {word:'pelo',icon:'👱',alt:'Una persona mostrando su pelo',choices:['pelo','pera','mono']},
 {word:'pera',icon:'🍐',alt:'Una pera',choices:['pera','mesa','mapa']},
 {word:'pico',art:picoArt,alt:'Un pájaro con el pico grande y amarillo',choices:['pico','palo','moto']}
];

export const readingLevels=[['mano','mapa'],['mesa','mono'],['moto','palo'],['pato','pelo'],['pera','pico']];
