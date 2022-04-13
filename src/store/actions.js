import { GET_PRODUCT, GET_SINGLE_PRODUCT } from "./types"
import { getAllProducts, getOneProducts } from "../services"

export const getProduct = (product) => ({ type: GET_PRODUCT, payload: product })
export const getOneProduct = (id) => ({
  type: GET_SINGLE_PRODUCT,
  payload: id,
})
export const fetchProduct = () => async (dispatch) => {
  try {
    const product = await getAllProducts()
    dispatch(getProduct(product))
  } catch (error) {
    console.log(`este es un error ${error}`)
  }
}

export const fetchOneProduct = (id) => async (dispatch) => {
  try {
    const product = await getOneProducts(id)
    dispatch(getOneProduct(product))
  } catch (error) {
    console.log(error)
  }
}