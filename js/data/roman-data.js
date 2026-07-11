export const romanSymbols=[['I',1,'uno'],['V',5,'cinco'],['X',10,'diez'],['L',50,'cincuenta'],['C',100,'cien'],['D',500,'quinientos'],['M',1000,'mil']];
export const romanMap=[['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]];
export function toRoman(value){let number=value,result='';for(const[roman,arabic]of romanMap)while(number>=arabic){result+=roman;number-=arabic}return result}
export function fromRoman(input){const text=input.toUpperCase().trim();let total=0,index=0;while(index<text.length){const pair=text.slice(index,index+2),match=romanMap.find(([r])=>r===pair)||romanMap.find(([r])=>r===text[index]);if(!match)return NaN;total+=match[1];index+=match[0].length}return toRoman(total)===text?total:NaN}
