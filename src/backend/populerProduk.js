const populerCategory = "?sort=desc"
const popularElem = document.querySelector(".cart-populer-produk")
async function dataPopulerProduk(){
    const dataPopuler = await FetchDataCategory()
    console.log(dataPopuler)
    dataPopuler.map((dataPopuler,key)=>{
        console.log(dataPopuler.image)
        popularElem.innerHTML += `<div class="cart">
        <img src=${dataPopuler.image} alt="">
        <h3>${dataPopuler.title}</h3>
        <h4>harga Rp${dataPopuler.price}00</h4>
        <div>`
    })

}
dataPopulerProduk()