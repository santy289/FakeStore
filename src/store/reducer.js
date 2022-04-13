import { GET_PRODUCT, GET_SINGLE_PRODUCT } from "./types"

const initialState = {
  products: [],
  oneProduct: {
    id: 0,
    title: "...",
    price: "...",
    category: "...",
    description: "...",
    image: "...",
    rating: {
      rate: 0,
      count: 0,
    },
  },
}

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      }
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload,
      }
    default:
      return state
  }
}