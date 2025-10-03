// Classes
//

class Pelanggan {
    constructor(nama, noTelp) {
        this.nama = nama;
        this.noTelp = noTelp;
        this.kendaraanDisewa = []; // Array untuk bisa sewa banyak
    }
    // Menyewa kendaraan (masuk ke kendaraanDisewa array)
    sewaKendaraan(kendaraanSewa) {
        this.kendaraanDisewa.push(kendaraanSewa);
        // console.log(`-> ${this.nama} berhasil menyewa: ${kendaraanSewa}.`);
    }
    // Mengembalikan kendaraan (hapus dari kendaraanDisewa array)
    kembalikanKendaraan(kendaraanSewa) {
        const index = this.kendaraanDisewa.indexOf(kendaraanSewa);
        if (index > -1) {
            this.kendaraanDisewa.splice(index, 1);
            // console.log(`-> ${this.nama} berhasil mengembalikan: ${kendaraanSewa}.`);
        } else {
            // console.warn(`-> ${this.nama} tidak menyewa ${kendaraanSewa} saat ini.`);
        }
    }
}

// Functions
//
// Menampilkan penyewa aktif (menggunakan array Pelanggan!)
function tampilkanPelangganMenyewa(daftarPelanggan) {
    console.log("=> DAFTAR PELANGGAN YANG SEDANG MENYEWA <=");
    console.log("");
    // .filter() untuk mendapatkan pelanggan yang sedang menyewa
    const penyewaAktif = daftarPelanggan.filter(pelanggan => pelanggan.kendaraanDisewa.length > 0);
    if (penyewaAktif.length === 0) {
        console.log("[Tidak ada pelanggan yang sedang menyewa kendaraan saat ini...]");
        return;
    }
    // Menampilkan data penyewa aktif satu per satu
    penyewaAktif.forEach((pelanggan, index) => {
        console.log(`${index + 1}. Nama: ${pelanggan.nama}`);
        console.log(`   Nomor HP: ${pelanggan.nomorTelepon}`);
        console.log(`   Menyewa: ${pelanggan.kendaraanDisewa.join(', ')}`);
        console.log("");
    });
}

// Main
//
// Contoh Pelanggan
const pelanggan1 = new Pelanggan("Budi Santoso", "081234567890");
const pelanggan2 = new Pelanggan("Siti Rahayu", "087654321098");
const pelanggan3 = new Pelanggan("Joko Susilo", "085000111222");
const daftarSemuaPelanggan = [pelanggan1, pelanggan2, pelanggan3]; // Simpan semua pelanggan dalam satu Array
// Contoh Transaksi
pelanggan1.sewaKendaraan("Mobil Sedan Toyota");
pelanggan2.sewaKendaraan("Sepeda Motor Matic");
pelanggan1.sewaKendaraan("Truk Pickup Isuzu");
pelanggan3.sewaKendaraan("Sepeda Gunung Polygon");
pelanggan2.kembalikanKendaraan("Sepeda Motor Matic");
// Tampilkan
tampilkanPelangganMenyewa(daftarSemuaPelanggan);