const Data = document.querySelector("ul");
const Draf = document.querySelectorAll("li");
const Tambah = document.querySelector("#TombolTambah");
const Ascending = document.querySelector("#SortAscending");

Data.addEventListener("click", (e) =>{
    /* Mengecek class apakah bernilai Close sehingga ketika terpenuhi maka hapus dengan
       set diplay menjadi none 
    */
    if(e.target.className == "Close"){
        swal({
            title: "Peringatan",
            text: "Apakah Anda Yakin Ingin Menghapus ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }) .then((willDelete) => {
            if (willDelete) {
                {
                    e.target.parentElement.style.display = "none";
                    e.preventDefault();
                    swal("Berhasil Menghapus!", { icon: "success", });
                }
            }
        });
    /* Mengecek class apakah bernilai Done sehingga ketika terpenuhi maka coret dengan
       set text-decoration menjadi line-through
    */
    } else if(e.target.className == "Done"){

        swal({
            title: "Peringatan",
            text: "Apakah Anda Yakin Ingin Menyelesaikan List Ini ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }) .then((willDelete) => {
            if (willDelete) {
                {
                    e.target.parentElement.style.backgroundColor = "lightgreen";
                    e.target.parentElement.style.textDecoration = "line-through";
                    e.target.style.color = "red";
                    e.preventDefault();
                    swal("Berhasil Menyelesaikan List Dari Daftar!", { icon: "success", });
                }
            }
        });
    }
});

Tambah.addEventListener("click", ()=>{

    // Deklarasi variabel
    const Buku = document.getElementById("InputBuku");

    if(Buku.value != ""){

        swal({
            title: "Peringatan",
            text: "Apakah Anda Yakin Ingin Menambahkan List ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }) .then((willDelete) => {
            if (willDelete) {
                {
                    const Nilai = "<li>" + 
                        Buku.value + 
                        "<span class='Done'>&radic;</span>" +
                        "<span class='Close'> X </span>" + 
                        "</li>" ;
                    Data.insertAdjacentHTML("afterbegin", Nilai);

                    // Membuat form inputan kosong kembali
                    Buku.value = "";
                    swal("Berhasil Di Tambahkan!", { icon: "success", });
                }
            }
        });
    }
});