export default class Api {
    constructor(url, data) {
        this._url = url;
        this._data = data;
    }

    async getJsonData() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res[this._data])
            .catch(err => console.log('an error occurs', err))
    }
}
