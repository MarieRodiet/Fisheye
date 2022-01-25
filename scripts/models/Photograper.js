class Photographer {
    constructor(data) {
        this._name = data.name;
        this._id = data.id;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._portrait = data.portrait;

    }

    getName() {
        return this._name;
    }

    getId() {
        return this._id;
    }

    getCity() {
        return this._city;
    }

    getCountry() {
        return this._country;
    }

    getTagLine() {
        return this.tagline;
    }

    getPrice() {
        return this._price;
    }

    getPortrait() {
        return `/assets/photographers/${this._portrait}`;
    }

}