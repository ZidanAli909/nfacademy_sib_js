// Array
//
let produkToko = [
   {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
   {id: 2, nama: "Mouse", harga: 200000, stok: 10},
   {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Fungsi
//
function tambahProduk(nama, harga, stok) {
    produkToko.push({id: produkToko.length + 1, nama: nama, harga: harga, stok: stok});
    console.log("SUKSES: Produk berhasil ditambahkan!");
}

function hapusProduk(id) {
    for (let i = 0; i < produkToko.length; i++) {
        const element = produkToko[i];
        if (element.id === id) {
            produkToko.splice(i, 1);
            for (let j = i; j < produkToko.length; j++) {
                produkToko[j].id -= 1;
            }
            return;
        }
    }
    console.log("ERROR: ID tidak ditemukan!");
}

function tampilkanProduk() {
    console.log(produkToko);
}

// Contoh fungsi berjalan:
//
tampilkanProduk();
tambahProduk("Monitor", 5000000, 3);
tampilkanProduk();
hapusProduk(4);
tampilkanProduk();