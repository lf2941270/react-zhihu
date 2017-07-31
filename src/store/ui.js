import {TOGGLE_NAV, HIDE_NAV} from 'actions'

const initState = {
  showNavbar: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
          console.log('TOGGLE_NAV')
          return {...state, showNavbar: !state.showNavbar}
    case HIDE_NAV:
      console.log('HIDE_NAV')
          return {...state, showNavbar: false}
    default:
          return state
  }
}
