

async function FetchData(category){
  const response = await fetch(`https://fakestoreapi.com/products`)
  const dataProduk = response.json()
  return dataProduk

}

async function FetchDataCategory(category){
  const response = await fetch(`https://fakestoreapi.com/products${category}`)
  const dataProduk = response.json()
  return dataProduk

}