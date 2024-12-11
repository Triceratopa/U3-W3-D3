console.log('Hello World')

//1) stringhe , numeri , booleani , undefined , null , any

// 2)
const myName : string = 'Giulia'
const age: number = 27
const tsStudent: boolean = true
console.log(`Il mio nome è ${myName}, ho ${age} e ${tsStudent} sto TypeScrip  `)

// 3) const greet = (name) => { return 'Ciao'+ name}
const greet = (name:string): string => {
    return 'Ciao'  +  name
   
}
console.log (greet(' Giulia'))

//4) const sum = (a: number, b: number) => {  return a + b }
 const sum = (a:number, b:number): number => {
    return a + b
 }
console.log(sum(18,5))

// 5)
const price= (price:number): number=>{
    const iva = 0.22
    return price + price*iva
}
console.log(price(55))

//6)
const result = (str1: string, str2: string): number =>{
    const sum=str1 +str2
    return sum.length
}
console.log (result ('ciao', 'hoana'))

//7) un Type Union è un modo per scrivere una variabile che accetta più di un tipo
// e si scrive usando |

//8) 
let v: string | number | undefined 
v = 'Giulia'

console.log(v)
