const BASE_URL = "https://fakestoreapi.com/products"

export async function getAllProducts() {
  const response = await fetch(`${BASE_URL}`)
  const data = await response.json()
  return data
}

export async function getOneProducts(id) {
  const response = await fetch(`${BASE_URL}/${id}`)
  const data = await response.json()
  return data
}
