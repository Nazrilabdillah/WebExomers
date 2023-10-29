

async function FetchData(){
  const response = await fetch("https://fakestoreapi.com/products")
  const dataProduk = response.json()
  return dataProduk
}