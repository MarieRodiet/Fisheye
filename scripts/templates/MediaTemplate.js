import Media from "./../models/Media.js";

export default class MediaTemplate {
    constructor(media, name) {
        this._media = new Media(media);
        this._name = name;
    }

    displayMediaTemplate() {
        const $wrapper = document.createElement("a");
        $wrapper.className = "media-element";
        if (this._media.video) {
            const videoCard = `
                <figure class="picture-box">
                    <video tabindex="0" class="video" id=${this._media.id} width="350" height="300" alt=${this._media.title} muted>
                        <source src="assets/images/${this._name}/${this._media.video}" type="video/mp4">
                        Votre navigateur ne permet pas de lire les vidéos.
                    </video>
                    <figcaption>        
                        <h2 class="media-title" >${this._media.title}</h2>
                        <div class="heart-content">
                            <span class="likes">${this._media.likes}</span>
                            <span aria-label="likes" class="svg-box" id=${this._media.id} name=${this._name}>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                                </svg>
                            </span>
                        </div>
                    </figcaption>
                </figure>`;
            $wrapper.innerHTML = videoCard;
        }
        else {
            const mediaCard = `
                <figure class="picture-box">
                    <img tabindex="0" class="photo" alt=${this._media.title} id=${this._media.id} src="assets/images/${this._name}/${this._media.image}" />
                        <figcaption>        
                            <h2 class="media-title" >${this._media.title}</h2>
                            <div class="heart-content">
                                <span class="likes">${this._media.likes}</span>
                                <span aria-label="likes" class="svg-box" id=${this._media.id} name=${this._name}>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                                    </svg>
                                </span>
                            </div>
                        </figcaption>
                </figure>`;
            $wrapper.innerHTML = mediaCard;
        }
        return $wrapper;
    }
}