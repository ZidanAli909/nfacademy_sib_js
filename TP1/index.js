// Init let
let sisi, panjang, tinggi;

// Deklarasi let
sisi = 3;
panjang = 4;
tinggi = 5;

// Kalkulasi
let luas = sisi * panjang * tinggi;

// Tulis elemen DOM
// TODO: document.write deprecated!
document.write(
    "<p> Sisi: " + sisi + "</p>",
    "<p> Panjang: " + panjang + "</p>",
    "<p> Tinggi: " + tinggi + "</p>",
    "<p><b> Hasil luas: " + luas + "</b></p>"
);