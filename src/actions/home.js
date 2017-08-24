import api from 'utils/api'
export const fetchLatest = () => (dispatch) => {
  api.getLatest().then(data => {
    return dispatch(receiveLatest(data))
  })
}


export const RECEIVE_LATEST = 'RECEIVE_LATEST'
function receiveLatest(data) {
  return {
    type: RECEIVE_LATEST,
    data: data,
    receivedAt: Date.now()
  }
}
