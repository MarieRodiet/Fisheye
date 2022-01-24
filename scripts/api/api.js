class Api {
    constructor(url) {
        this._url = url
    }

    async getData() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
    }
}
