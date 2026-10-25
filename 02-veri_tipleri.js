//Veri Tipleri

// === 1. PRIMITIVE (İLKEL) TİPLER ===
let sayi = 42;          // Number
let ondalik = 3.14;     // Number
let isim = "Kanka";     // String
let onlineMi = true;    // Boolean
let secilmemisVeri;     // Undefined (İçi boş)
let bosVeri = null;     // Null (Bilerek boş bırakılmış)

console.log("Sayi Tipi:", typeof sayi);
console.log("İsim Tipi:", typeof isim);
console.log("Online Mi Tipi:", typeof onlineMi);
console.log("Boş Veri Tipi:", typeof secilmemisVeri);

//Reference
var kullanici={
    ad:"Berk",
    yas:28,
    isDeveloper:true
};

console.log("Kullanıcı:",kullanici);
console.log("Kullanıcı Adı:",kullanici.ad);

//Array-Dizi

diller=["C#","SQL","Python"];

console.log("Diller:",diller);

console.log("İlk Dil:",diller[0]);