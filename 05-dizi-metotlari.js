//Diziler Tekrar ve Dizi Metodları

//Ürünler Dizesi
const urunler = [
    { id: 1, ad: "Laptop", fiyat: 30000, kategori: "Elektronik" },
    { id: 2, ad: "Telefon", fiyat: 20000, kategori: "Elektronik" },
    { id: 3, ad: "Klavye", fiyat: 1500, kategori: "Aksesuar" },
    { id: 4, ad: "Kahve Makinesi", fiyat: 5000, kategori: "Mutfak" }
];

//Sadece Ürün Adlarını Getir.
const urunAdlari=urunler.map(x=>x.ad);

console.log(urunAdlari);

const zamliUrunler = urunler.map(urun => ({
    ...urun,
    fiyat: urun.fiyat * 1.1 // sadece fiyatı güncelle
}));
console.log("Zamlı Ürünler Listesi:", zamliUrunler);


//fiyatı 4000'den büyük olan ürünleri getir.

const pahaliUrunler = urunler.filter(urun => urun.fiyat > 4000);
console.log("Pahalı Ürünler (Fiyat > 4000):", pahaliUrunler);

//Sadece Elektronik Kategorisine Sahip Olanlar

const elektronikler=urunler.filter(y=>y.kategori==="Elektronik");

console.log(elektronikler);

//ID Değeri 3 Olan Ürün

const urun=urunler.find(c=>c.id===3);

console.log(urun);