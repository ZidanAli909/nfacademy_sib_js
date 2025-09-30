// DOM Get Elements
const tdNama = document.getElementById("nama");
const tdUmur = document.getElementById("umur");
const tdJabatan = document.getElementById("jabatan");
const tdStatus = document.getElementById("status");
const tdGajiPokok = document.getElementById("gaji_pokok");
const tdTunjanganJabatan = document.getElementById("tunjangan_jabatan");
const tdBPJS = document.getElementById("bpjs");
const tdTunjanganKeluarga = document.getElementById("tunjangan_keluarga");
const tdGajiTotal = document.getElementById("gaji_total");

// Data Dasar
let nama = "Dodi Prayodi";
let umur = 25;
let stat = "Menikah";
let jabatan = "Manager";

// Kalkulasi 
let gajiPokok, tunjanganJabatan, bpjs, tunjanganKeluarga, gajiTotal;

switch (jabatan) {
    case "Manager": gajiPokok = 15000000; break;
    case "Asisten Manager": gajiPokok = 10000000; break;
    case "Staff": gajiPokok = 5000000; break;
    default: gajiPokok = 5000000; break;
}
tunjanganJabatan = gajiPokok * 0.15;
bpjs = gajiPokok * 0.1;

if (stat == "Menikah") tunjanganKeluarga = gajiPokok * 0.2;
else tunjanganKeluarga = 0;

gajiTotal = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

// DOM Writing
tdNama.innerHTML = nama;
tdUmur.innerHTML = umur;
tdStatus.innerHTML = stat;
tdJabatan.innerHTML = jabatan;
tdGajiPokok.innerHTML = "Rp." + gajiPokok;
tdTunjanganJabatan.innerHTML = "Rp." + tunjanganJabatan;
tdBPJS.innerHTML = "Rp." + bpjs;
tdTunjanganKeluarga.innerHTML = "Rp." + tunjanganKeluarga;
tdGajiTotal.innerHTML = "Rp." + gajiTotal;