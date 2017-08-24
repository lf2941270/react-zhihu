import fetchLatest from 'actions/home'

import {RECEIVE_LATEST} from 'actions/home'

const initState = {}

export default (state = initState, action) => {

  switch (action.type) {
    case RECEIVE_LATEST:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

