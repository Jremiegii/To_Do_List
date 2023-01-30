const Data = document.querySelector("ul");
const Draf = document.querySelectorAll("li");
const Tambah = document.querySelector("#TombolTambah");
const Ascending = document.querySelector("#SortAscending");

Data.addEventListener("click", (e) =>{
    /* Mengecek class apakah bernilai Close sehingga ketika terpenuhi maka hapus dengan
       set diplay menjadi none */
    if(e.target.className == "Close"){
        const Opsi = Number(prompt("Apakah Anda Yakin Untuk Menghapus ini ? (1. Ya, 2. Tidak)"), [1, 2]);
        if(Opsi == 1){
            e.target.parentElement.style.display = "none";
            e.preventDefault();
        }else if(Opsi == 2){
            //
        } else {
            alert("Terjadi Kesalahan");
        }
    /* Mengecek class apakah bernilai Done sehingga ketika terpenuhi maka coret dengan
       set text-decoration menjadi line-through */
    } else if(e.target.className == "Done"){
        const Opsi = Number(prompt("Apakah Anda Yakin Untuk Menyelesaikan ini ? (1. Ya, 2. Tidak)"), [1, 2]);
        if(Opsi == 1){
            e.target.parentElement.style.backgroundColor = "lightgreen";
            e.target.parentElement.style.textDecoration = "line-through";
            e.target.style.color = "red";
            e.preventDefault();
        } else if(Opsi == 2){
            //
        } else {
            alert("Terjadi Kesalahan");
        }
    }
});

Tambah.addEventListener("click", ()=>{

    // Deklarasi variabel
    const Buku = document.getElementById("InputBuku");

    if(Buku.value != ""){
        // Menambahkan nilai
        const Nilai = "<li>" + 
                        Buku.value + 
                        "<span class='Done'>&radic;</span>" +
                        "<span class='Close'> X </span>" + 
                        "</li>" ;
        Data.insertAdjacentHTML("afterbegin", Nilai);

        // Membuat form inputan kosong kembali
        Buku.value = "";
    } else {
        alert("Terjadi kesalahan. Silahkan periksa dan isi kembali !");
    }
    
    // const Daftar = document.createElement("li");
    // const Nilai = document.createTextNode(Buku.value);
    // Daftar.appendChild(Nilai);
    // Data.appendChild(Daftar);

    // console.log(Data);
    // console.log(Draf);

});