function hitungTotal() {
    var kodeBarang = document.getElementById('kodeBarang').value;
    var jumlahBarang = document.getElementById ('jumlahBarang').value; 

    // Proses hitung harga dengan didasarkan pada Kode Barang yang di inpukan pengguna
    var harga
    switch (kodeBarang) {
        case '001':
            harga = 10000;
            break;
        case '002':
            harga = 20000;
            break;
        case '003':
            harga = 30000;
            break;     
        default:
            alert("Kode Barang Tidak Valid");
            return;
    }

    // Menghitung total harga pembelian dan menampilkan total pembayaran
    var totalHarga = harga * jumlahBarang;
    alert("Total Pembayaran adalah: Rp. " + totalHarga);

    // Melakukan input pembayaran yang dilakukan oleh pembeli 
    var totalBayar = prompt("Masukkan Uang Pembeli:");

    // Proses hitung kembalian
    var kembalian = totalBayar - totalHarga;
    if (kembalian >= 0){
        alert("Transaksi Berhasil. Kembalian Uang Anda: Rp. " + kembalian);
    } else {
        alert("Transaksi Gagal. Uang Anda Kurang");
    }
}