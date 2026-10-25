function selamVer(isim){
    return `Merhaba ${isim}`;
}

alert(selamVer("Ahmet"));



const modernSelamVer = (isim) => {
    return `Selam ${isim}, modern dünyana hoş geldin!`;
};

const mesaj2 = modernSelamVer("Mehmet");
console.log("Modern (Arrow):", mesaj2);


const kareAl = sayi => sayi * sayi;

console.log("Kısaltılmış Ok Fonksiyonu Sonucu:", kareAl(5)); // 25