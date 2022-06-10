import { GET_PRODUCT, GET_SINGLE_PRODUCT, USER_INFO } from "./types"
import { getAllProducts, getOneProducts, getDocById } from "../services"

export const getProduct = (product) => ({ type: GET_PRODUCT, payload: product })
export const getOneProduct = (id) => ({type: GET_SINGLE_PRODUCT,payload: id,})
export const infoUser = (info) => ({ type: USER_INFO, payload: info });

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

export const getinfo = (id) => async (dispatch) => {
  try {
      const info = await getDocById('users', id);
      dispatch(infoUser(info));
  } catch (error) {
      throw new Error(error);
  }
}