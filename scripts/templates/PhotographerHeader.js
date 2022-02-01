class PhotographerHeader {
    constructor(photographer) {
        this._photographer = photographer;
    }

    displayHeader() {
        const $wrapper = document.querySelector(".photograph-header");
        const imagePath = "assets/photographers/";
        const header = `
        <div class="photographer-info">
            <h2 class="PhotographerName">${this._photographer.name}</h2>
            <p class="PhotographerLocation">${this._photographer.city}, ${this._photographer.country}</p>
            <p class="PhotographerTagline">${this._photographer.tagline}</p>
        </div>
            <button class="contact_button">Contactez-moi</button>
        <img class="PhotographerProfile" src= ${imagePath}${this._photographer.portrait} alt="${this._photographer.name}" />
        `
        $wrapper.innerHTML = header;
        return $wrapper;
    }
}