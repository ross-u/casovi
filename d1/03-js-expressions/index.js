/* 
console.log("radi!");

// Matematickiu izrazi i operatori
// Operatori su: + - / *   **  %

console.log(5 + 5);

var cena = 1000;
var porez = 180;

var ukupno1 = 1000 + 180;
var ukupno2 = cena + porez;

console.log(ukupno2);


var a = 15 + 200; // 215
var b = 100 - 1;  // 99
var c = 10 * 10;  // 100
var d = 200 / 2;  // 100

var ukupno3 = a + b + c + d;

console.log("ovo je rezultat", ukupno3);


var e = 50**6; // 50₆ (50 * 50 * 50 * 50 * 50)

console.log("e", e);

// Modulo % - deljenje sa ostatkom

var f1 = 50 / 2; // 25

var f2 = 50 % 2; // 0
var f3 = 53 % 2; // 1


// Provera parnog/neparnog broja:
var rez = 347 % 2; // 0

var paran = rez === 0; // paran broj - true/false
console.log('paran', paran);
 */


/* 
Napravi sledece promnjive:
uros -> 32 
milovan -> 30
tijana -> 25
anci -> 3
Koristeci promenjive izracunaj ukupan zbir godina
i koristeci modulo proveri da li je ukupan zbir paran ili neparan 
*/



// Kombinovanje operatora dodele:
/* 
var x = 50;
var y = 10;
var w = 100;
var q = 200;

x += 100; // isto kao x = x + 100;

y -= 1; // isto kao y = y - 1;

w *= 10; // isto kao w = w * 10;

q /= 2; // isto kao  q = q / 2; 
var broj = 5;

// console.log(broj++); // broj++ -> vrati trenutnu vrednost i onda uvecaj za 1
console.log(++broj); // broj -> onda uvecaj za 1 i onda vrati novu vrednost 


console.log('broj je', broj);
*/





// String operacije i operatori
/* 
var user1 = "milovan";  // 0 m  1 i 
var user2 = "uros";

// Svaka string vrednost dolazi sa poljem .length
// koje koristimo da bismo dobili broj karaktera
console.log(user1.length); // -> 7
console.log(user2.length); // -> 4


// Pristup slovima u tekstu:

var prvoSlovo = user1[0];
console.log(prvoSlovo);

var zadnjeSlovo = user1[6];
console.log(zadnjeSlovo);

var zadnjeSlovo2 = user2[ user2.length - 1 ];
console.log(zadnjeSlovo2);



var ime = "uros";
var prezime = "cirkovic";

//     U + ros -> uros
ime = ime[0].toUpperCase()  + ime.slice(1);
prezime = prezime[0].toUpperCase()  + prezime.slice(1);

var imeIPrezime = ime + " " + prezime;

console.log(imeIPrezime);


var primer = 1 + 'milovan';
console.log(primer);
 */



// Operatori poredjenja
// < > == === <= >=
// Operatori poredjenja uvek vracaju true/false bul.

var r1 = 10 > 5; // true
var r2 = 100 < 99; // false

var r3 = 10 + 5 > 20; // mozemo da kombinujemo izraze tokom poredjenja


var r4 = 2 == 2; // true
var r5 = 1 == 5; // false

var r6 = 1 == "1"; // true   -> coercion (promena tipa podatka na silu)
var r7 = 1 === "1"; // false -> operator === poredi vrednost i tip podatka

var r8 = "7" === "7"; // true

var r9 =  10 >= 10;
 
console.log(r8);


// Logicki izrazi i operatori

// var gostGodine = prompt("Unesite broj godina:");

if (gostGodine >= 18) {
  console.log('Dozvoljen ulaz');
}
else {
  console.log('Ulaz je dozvoljen samo punoletnim licima!');
}


/*
Koristeci naredbu prompt() pitaj korisnika za godinu rodjenja.
- Ukoliko je korisnkik mladji od 6 godina loguj na konzoli: Popust za decu 5%
- U suprotnom loguj na konzoli: Popust za starije 15%
*/