import { SELECT_PRODUCT } from '../actions/action_products'

export default function (state = null, action) {
  switch (action.type) {
  case SELECT_PRODUCT:
    return action.payload.name
    break;
  default:
    return state
  }
  return state
}
