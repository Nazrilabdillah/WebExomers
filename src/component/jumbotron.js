const categoryJumbtron = ""
const jumbotron = document.querySelector(".wrapper-jumbotron")
async function mapDataProduk(){
  const dataProduk = await FetchData(categoryJumbtron)
  dataProduk.map((produk,key)=>{
    jumbotron.innerHTML +=`<div class="jumbotron">
    <li class="wrapper-deskription">
    <h2 class="content">${produk.title}</h2>
   <p class="content">${produk.description}</p>
    <h3 class="content">harga Rp${produk.price}</h3>
    <button class="content btn">masukan ke cart</button>
   </li>
    <img src=${produk.image} alt="">
    </div>
    `
  })
}
mapDataProduk()