class Media {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._video = data.video;
    }

    getId() {
        return this._id;
    }

    getPhotographerId() {
        return this._photographerId;
    }

    getTitle() {
        return this._title;
    }

    getImageName() {
        return this._image;
    }

    getLikes() {
        return this._likes;
    }

    getDate() {
        return this._date;
    }
    
    getPrice() {
        return this._price;
    }

    getVideo() {
        return this._video;
    }

}