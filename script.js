const btnSimpan = document.getElementById('btnSimpan');
const daftarCatatan = document.getElementById('daftarCatatan');
const inputTanggal = document.getElementById('tanggal');
const inputIsi = document.getElementById('isiCatatan');

// Set tanggal default ke hari ini
inputTanggal.valueAsDate = new Date();

btnSimpan.addEventListener('click', function() {
    const tanggal = inputTanggal.value;
    const isi = inputIsi.value;

    if(isi.trim() === "") {
        alert("Isi catatan tidak boleh kosong!");
        return;
    }

    // Membuat elemen catatan baru
    const divCatatan = document.createElement('div');
    divCatatan.classList.add('catatan-item');
    
    divCatatan.innerHTML = `
        <div class="tanggal-teks">${tanggal}</div>
        <div>${isi}</div>
    `;

    // Menambahkan catatan baru ke paling atas
    daftarCatatan.prepend(divCatatan);

    // Kosongkan form teks
    inputIsi.value = "";
});