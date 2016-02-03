import { FILL_ITEMS } from '../actions/action_products'

export default function (state = [], action) {
  switch (action.type) {
  case FILL_ITEMS:
    return action.payload
    break;
  }
  return state
}
