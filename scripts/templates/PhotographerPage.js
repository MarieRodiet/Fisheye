class PhotographerPage {
    constructor(photographer) {
        this._photographer = photographer;
    }

    displayHeader() {
        const imagePath = "assets/photographers/";
        const $wrapper = document.createElement("div");
        const header = `
            <h2 class="profileName">${this._photographer.name}</h2>
            <p class="location">${this._photographer.city}, ${this._photographer.country}</p>
            <p class="tagline">${this._photographer.tagline}</p>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class="profile" src= ${imagePath}${this._photographer.portrait} alt="${this._photographer.name}" />
        `

        $wrapper.innerHTML = header;
        return $wrapper;
    }
}

const header = new PhotographerPage();
header.displayHeader();