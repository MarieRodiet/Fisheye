class Photographer {
    constructor(data) {
        this._photographer = data;
    }

    get name() {
        return this._photographer.name;
    }

    get id() {
        return this._photographer.id;
    }

    get city() {
        return this._photographer.city;
    }

    get country() {
        return this._photographer.country;
    }

    get tagline() {
        return this._photographer.tagline;
    }

    get price() {
        return this._photographer.price;
    }

    get portrait() {
        return `/assets/photographers/${this._photographer.portrait}`;
    }

}