import { GET_PRODUCT, GET_SINGLE_PRODUCT, USER_INFO } from "./types"

const initialState = {
  products: [],
  userInfo: {
    avatar: '',
    email: '',
    car: [],
    username: '',
},
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
    case USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
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