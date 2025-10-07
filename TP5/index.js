// Data Produk (Contoh)
//

let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Mouse", harga: 100000 },
  { id: 5, nama: "Keyboard", harga: 400000 },
  { id: 6, nama: "Monitor", harga: 3500000 },
];

// Fungsi
//

function tambahProduk(jenisEvent, ...detailProduk) {
  const [id, nama, harga] = detailProduk; // Destructuring dari Rest Paramter

  if (produkList.some((p) => p.id === id)) {
    console.log(`[tambahProduk] Produk dengan ID ${id} sudah ada.`);
    return;
  }

  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru]; // Spread Operator
  console.log(`[tambahProduk] Produk baru telah ditambahkan: ${nama}.`);
}

function hapusProduk(jenisEvent, idHapus) {
  const panjangAwal = produkList.length;
  produkList = produkList.filter((produk) => produk.id !== idHapus);

  if (produkList.length < panjangAwal) {
    console.log(`[hapusProduk] Produk dengan ID ${idHapus} berhasil dihapus.`);
  } else {
    console.log(`[hapusProduk] Produk dengan ID ${idHapus} tidak ditemukan.`);
  }
}

function tampilkanProduk() {
  console.log("[][] DAFTAR PRODUK SAAT INI [][]");
  produkList.forEach((produk) => {
    const { nama, harga } = produk; // Destructuring
    console.log(`-> ${nama}: Rp${harga.toLocaleString("id-ID")}`);
  });
  console.log("[]============================[]");
}

// Event Handler
//

const eventHandler = {
  tambah: tambahProduk,
  hapus: hapusProduk,
  tampil: tampilkanProduk,

  trigger(jenisEvent, ...args) {
    if (this[jenisEvent]) {
      this[jenisEvent](jenisEvent, ...args); // Spread Operator
    } else {
      console.log(`[ERROR] Event ${jenisEvent} tidak dikenal!`);
    }
  },
};

// Testing
//

console.log("=== Awal Aplikasi ===");
eventHandler.trigger("tambah", 7, "Headset", 650000);
eventHandler.trigger("tambah", 8, "Webcam", 450000);
eventHandler.trigger("tampil");
eventHandler.trigger("hapus", 4); // Hapus: Mouse
eventHandler.trigger("tampil");
