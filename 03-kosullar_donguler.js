//Koşul Yapıları

let yas=Number(prompt("YAŞ:"));

if (yas>=18){
    console.log("Ehliyet Alabilirsin!");
    alert("Ehilet Alabilirsin!");
}
else{
    console.log("Ehliyet Alamazsın");
    alert("Ehilet Alamazsın!");
}

//for döngüsü

for(let i=0;i<=10;i++){
    console.log(`${i} indeksli ürün`);
}

const arabalar = ["BMW", "Mercedes", "Audi"];

// C#'taki foreach mantığı, fonksiyonel hali:
arabalar.forEach(function(araba, indeks) {
    console.log(`${indeks} indeksli araba: ${araba}`);
});