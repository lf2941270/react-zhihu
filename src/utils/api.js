class Api {
  apiPrePath = '/api/4'
  getLatest() {
    return fetch(this.apiPrePath + '/news/latest', {
      method: 'GET',
      mode: 'cors'
    })
      .then(response => response.json())
  }
}

export default new Api()
