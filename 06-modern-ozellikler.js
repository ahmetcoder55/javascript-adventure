//Modern JavaScript Ozellikleri

// === 1. DESTRUCTURING (OBJE PARÇALAMA) ===
const gelistirici = {
    ad: "Kerem",
    yas: 25,
    uzmanlik: ".NET & React",
    sehir: "İstanbul"
};

const {ad,yas,uzmanlik}=gelistirici;

console.log(`Parçalanan Veriler:${ad} ${yas} ${uzmanlik}`);


const sayilar1=[2,3,4];

const sayilar2=[5,6,7];

const sayilar=[...sayilar1,99,...sayilar2]

console.log("Tüm Sayılar:",sayilar);


const eskiTelefon = { marka: "Apple", model: "iPhone 13" };

const yeniTelefon={
    ...eskiTelefon,
    model:"İphone 16",
    hafiza:"128 GB"
};

console.log("Yeni Telefon:",yeniTelefon);
