const populerCategory = "?sort=desc"
const popularElem = document.querySelector(".cart-populer-produk")
async function dataPopulerProduk(){
    const dataPopuler = await FetchDataCategory(populerCategory)
    console.log(dataPopuler)
    dataPopuler.map((dataPopuler,key)=>{
        popularElem.innerHTML += `<div class="cart">
        <h3>${dataPopuler.title}</h3>
        <img src=${dataPopuler.image} alt="jj">
        <div>`
    })

}
dataPopulerProduk()