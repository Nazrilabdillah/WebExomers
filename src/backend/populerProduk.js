const populerCategory = "/category/popular"
const popularElem = document.querySelector(".cart-populer-produk")
async function dataPopulerProduk(){
    const dataPopuler = await FetchDataCategory(populerCategory)
    console.log(dataPopuler)
    dataPopuler.map((dataPopuler,key)=>{
        popularElem.innerHTML = `<div class="cart">
        <h3></h3>
        <div>`
    })

}
dataPopulerProduk()