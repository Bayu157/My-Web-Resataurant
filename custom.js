const btns = document.querySelectorAll(".filter-btnMenu");
const produkMenu = document.querySelectorAll(".filterMenu");

for (i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", (e) => {
        e.preventDefault

        // dataset.filter yang ditargetkan adalah data-filter di html
        const filter = e.target.dataset.filter;

        // produk pada function hanya penamaan elemennya
        produkMenu.forEach((produk )=> {
            if (filter == "all") {
                produk.style.display = "block"
            } else {
                if (produk.classList.contains(filter)) {
                    produk.style.display = "block"
                } else {
                    produk.style.display = "none"
                }
            }
        })

    })
}

// function murid (nama, tenaga) {
//     this.nama = nama;
//     this.tenaga = tenaga;
// }

// murid.prototype.makan = function(porsi) {
//     this.tenaga = this.tenaga += porsi;
//     return `selamat makan ${this.nama}`
// }
// let bayu = new murid('bayu', 10)

// const filter = e => {
//     document.querySelectorAll(".active").classlist.remove("active");
//     e.target.classlist.add("active")
// }