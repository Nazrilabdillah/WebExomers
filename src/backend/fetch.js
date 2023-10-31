

async function FetchData(category){
  const response = await fetch(`https://fakestoreapi.com/products`)
  const dataProduk = response.json()
  return dataProduk

}

async function FetchDataCategory(){
  const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=12`)
  const dataProduk = response.json()
  return dataProduk

}