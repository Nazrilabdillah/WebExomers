

async function FetchData(category){
  const response = await fetch(`https://fakestoreapi.com/products`)
  const dataProduk = await response.json()
  return dataProduk

}

async function FetchDataCategory(){
  const response = await fetch(`https://fakestoreapi.com/products`)
  const dataProduk = await response.json()
  console.log(dataProduk)
  return dataProduk

}