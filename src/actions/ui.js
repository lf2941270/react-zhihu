import {TOGGLE_NAV, HIDE_NAV} from 'actions'

export const toggleNav = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: TOGGLE_NAV
    })
  })
}

export const hideNav = () => ({
  type: HIDE_NAV
})
