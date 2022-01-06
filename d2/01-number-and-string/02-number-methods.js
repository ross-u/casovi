// Math - posebni objekat sa naredbama/metodima za rad sa brojevima

// Math.floor() - zaokruzivanje decimalnih brojeva na najblizi donji broj, i vraca novu vrednost

// Math.ceil() - zaokruzivanje decimalnih brojeva na najblizi gornji broj, i vraca novu vrednost

// Math.round() - zaokruzivanje decimalnih brojeva na najblizi broj, i vraca novu vrednost

// Math.random() - vraca naizmenicni broj u izmedju 0 i 0.99999999


console.log( Math.floor(3.85) ); // zaokruzuje na dole

var zaokruzi1 = Math.floor( 57.35 );
console.log("zaokruzi1", zaokruzi1);



var zaokruzi2 = Math.ceil(10.0001); // zaokruzuje na dole
console.log(zaokruzi2);


console.log( Math.round(3.49) ); // do .49999 zaokruzuje na dole
console.log( Math.round(3.5) ); // od .5 zaokruzuje na gore


// Math.random()
var randomNum = Math.random();

console.log('randomNum', randomNum);

// Primer: Kako dobiti nasumicni broj izmedju 1 - 37

console.log( Math.ceil(Math.random() * 37) ); // vratice broj koje je u rangu od 0 do 37


// 
var od1Do100 =  Math.ceil(Math.random() * 100 );
console.log('od1Do100', od1Do100);


var od0Do99 =  Math.floor(Math.random() * 100 );
console.log('od0Do99', od0Do99);


// Konvertovanje vrednosti u broj - Number()

var str = "1234.5";
var num = Number(str);

console.log("num", num);

// Konvertovanje broja u string - .toFixed(number)

var num2 = 123.45;

var str1 = num2.toFixed(1); // konvertuje broj u string sa jednom decimalom
var str2 = num2.toFixed(2); // konvertuje broj u string sa dve decimale

console.log('str1', str1);
console.log('str2', str2);



// typeof operator - koristimo za proveru tipa podatka
// operator vraca ime tipa podatka kao tekst, npr: 'number', 'string', 'boolean', 'undefined', itd.
console.log( typeof undefined );


// Proveri da li je vrednost broj pre sabiranja. 
// Ako nije prvo konvertuj vrednost u broj i tek onda saberi.

var total = 100;
var random = "5555";


if (typeof random === "string") {
  total = total + Number(random);
}
else {
  total = total + random;
}

console.log('total', total);