import * as actionTypes from '../actions/actionTypes'

const initialAuthState = {
  password: 'hello@cee',
  token: ''
}

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SET_PASSWORD:
      return { ...state, password: action.pass }

    case actionTypes.SET_TOKEN:
      return { ...state, token: action.token }

    default:
      return state
  }
}