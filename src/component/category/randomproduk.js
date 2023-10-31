
const randomElem = document.querySelector(".cart-random-produk")
async function dataRandomProduk(){
    const dataPopuler = await FetchDataCategory()
    console.log(dataPopuler)
    dataPopuler.map((dataPopuler,key)=>{
        console.log(dataPopuler.title)
        randomElem.innerHTML += `<div class="cart">
        <img src=${dataPopuler.image} alt="">
        <h3>${dataPopuler.title}</h3>
        <h4>harga Rp${dataPopuler.price}00</h4>
        <div>`
    })

}
dataRandomProduk()