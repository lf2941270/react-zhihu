import {TOGGLE_NAV} from 'actions'

const initState = {
  showNavbar: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
          return {...state, showNavbar: !state.showNavbar}
    default:
          return state
  }
}
