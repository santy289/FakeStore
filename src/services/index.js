const API_URL = 'https://fakestoreapi.com/products';

export async function fetchProducts() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
export async function findProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
}