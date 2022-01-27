class MediaTemplate {
    constructor(media) {
        this._media = media;
    }

    isImage() {
        return this._media.image ? true : false;
    }

    displayMediaTemplate() {
        const $wrapper = document.createElement("div");
        const mediaCard = `<h2>${this._media.title}</h2>`;
        $wrapper.innerHTML = mediaCard;
        return $wrapper;
    }
}
/*        const imagePath = "assets/images/";
        const image = `
            <img class="photo" src=${imagePath}${this._media.image} alt=${this._media.title}/>
        `;
        this._media.image ? mediaCard += image : mediaCard += video;
        const video = `
            <video width="320" height="240" autoplay muted>
                <source src=${imagePath}${this._media.video} type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
            </video>
        `; */