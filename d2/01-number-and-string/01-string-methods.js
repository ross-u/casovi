console.log('radi');


// .length - polje/property
// koristimo ga da dobijemo indeks zadnjeg slova
// ili sa petljama

var str1 = "To be or not to be";

console.log(str1.length);


var zadnjeSlovo = str1[str1.length - 1];
console.log(zadnjeSlovo);



// .repeat()
// naredba koja ponavlja sadrzaj teksta i vraca novi string
var str2 = "la";
var str3 = '$ ';

var strLaLa = str2.repeat(10);
var strDolar = str3.repeat(100);

console.log(strLaLa);
console.log(strDolar);


// .charAt()
// Naredba koja vraca slovo/karakter na datom indeksu u stringu

var str4 = "Uros ucitelj ccc   .";

var cetvrti = str4.charAt(3);
console.log(cetvrti);

var zadnje = str4.charAt( str4.length - 1 ); // isto kao: str4[str4.length - 1]
console.log(zadnje);


// .indexOf(substring)
// naredba koju koristimo za pronalazenje indeksa na kome se odredjeni tekst nalazi (substring)
// Naredba proverava string pocinjuci od prvog slova i vraca broj indeksa prvog nadjenog slova.


var slovoC = str4.indexOf('Uros');
console.log(slovoC);


// .lastIndexOf(substring)
// Naredba proverava string pocinjuci od zadnjeg slova vraca broj indeksa prvog nadjenog slova.
var zadnjeSlovoC = str4.lastIndexOf('c');
console.log(zadnjeSlovoC);


// .includes(substring)
// Naredba proverava da li string sadrzi odredjeni tekst i vraca true/false.
// Ova naredba je case-sensitive (proverava mala i velika slova u stringu).

var str5 = 'ana voli milovana';

var sadrziIme = str5.includes("milovan");
console.log(sadrziIme);

// Primer upotrebe:
var cena = '153.32';

if (cena.includes('$')) {
  console.log(cena);
}
else {
  cena += "$";  
  // isto kao: cena = cena + "$";
  console.log(cena);
}


// .slice()
// Naredba koju koristimo za kopiranje teksta.

var message = " Don't worry be happy ";

var ceoString = message.slice(); // kopira ceo string
console.log(ceoString);

var bezPrveReci = message.slice(6); // kopira sa pocetkom na indeksu 6
console.log(bezPrveReci);


var prvaRec = message.slice(1, 6); // kopira deo tekst od indeksa 1 do 6 
console.log(prvaRec);



var sadrziWorry = message.includes('worry'); // vraca true ili false

if (sadrziWorry) {
  var pocetniIndeks = message.indexOf('worry'); // 7
  
  var rec = message.slice(pocetniIndeks, pocetniIndeks + 5);
  console.log('rec', rec);
}


// Koristeci naredbe .includes()  . indexOf() i  .slice()
// Pronadji, sacuvaj i odstampaj tekst dat u promenjivoj `wordToFind`

var text = "not everything is gold!";

var wordToFind = "gold";


// Pronadji u datom tekstu prvu rec koja pocinje sa datim slovom `b`,
// i console loguj celu rec od 4 slova. Ocekivani rezultat: "bold"

var text2 = "gold bol moldd roll baby";
var datoSlovo = "b";

console.log( text2.endsWith("baby") )