console.log('Hello World');
//1) stringhe , numeri , booleani , undefined , null , any
// 2)
var myName = 'Giulia';
var age = 27;
var tsStudent = true;
console.log("Il mio nome \u00E8 ".concat(myName, ", ho ").concat(age, " e ").concat(tsStudent, " sto TypeScrip  "));
// 3) const greet = (name) => { return 'Ciao'+ name}
var greet = function (name) {
    return 'Ciao' + name;
};
console.log(greet(' Giulia'));
//4) const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) {
    return a + b;
};
console.log(sum(18, 5));
// 5)
var price = function (price) {
    var iva = 0.22;
    return price + price * iva;
};
console.log(price(55));
//6)
var result = function (str1, str2) {
    var sum = str1 + str2;
    return sum.length;
};
console.log(result('ciao', 'hoana'));
//7) un Type Union è un modo per scrivere una variabile che accetta più di un tipo
// e si scrive usando |
//8) 
var v;
v = 'Giulia';
console.log(v);
