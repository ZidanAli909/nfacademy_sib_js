import users from "./data.js";

// Tampilkan data
const index = () => {
    console.log("[]====================[]");
    console.log("[] Tampilan Data User []");
    console.log("[]====================[]");
    // Array baru berisi string deskripsi dari map() users, lalu tampilkan untuk setiap string
    const userList = users.map((user, index) =>{
        return `${index + 1}. Nama: ${user.nama}, Umur: ${user.umur} tahun, Alamat: ${user.alamat}, Email: ${user.email}`;
    });
    userList.forEach(item => console.log(item));
    // Total data ambil dari .length
    console.log(`\n[ Total data: ${users.length} ]\n`);
};

// Simpan data
const store = (user) => {
    console.log("[]====================[]");
    console.log("[]    Tambah User     []");
    console.log("[]====================[]");
    // Masukkan data baru dengan .push
    users.push(user);
    console.log(`=> [SUKSES] User ${user.nama} berhasil ditambahkan.`);
    // Total data ambil dari length
    console.log(`\n[ Total data: ${users.length} ]\n`);
};

// Hapus data
const destroy = (nama) => {
    console.log("[]====================[]");
    console.log("[]     Hapus User     []");
    console.log("[]====================[]");
    // Cari indeks data berdasarkan nama
    const indexToDelete = users.findIndex(user => user.nama === nama);
    if (indexToDelete !== -1) {
        // Hapus 1 elemen pada indeks yang ditemukan lebih awal (jika ada duplikat) menggunakan .splice
        const deletedUser = users.splice(indexToDelete, 1);
        console.log(`=> [SUKSES] User ${deletedUser[0].nama} berhasil dihapus.`);
    } else {
        console.log(`=> [GAGAL] User ${nama} tidak ditemukan.`);
    }
    // Total data ambil dari length
    console.log(`\n[ Total data: ${users.length} ]\n`);
};

export { index, store, destroy };