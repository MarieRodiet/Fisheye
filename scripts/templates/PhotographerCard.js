class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerCard() {
        //onclick="getPhotographerId(${this._photographer})
        const imagePath = "assets/photographers/";
        const $wrapper = document.createElement("article");
        $wrapper.classList.add("photographer_card");
        const photographerCard = `
        <a id=${this._photographer.id} class="card-link" href="photographer.html">
            <img class="profile" src= ${imagePath}${this._photographer.portrait} alt="${this._photographer.name}" />
            <h2 class="profileName">${this._photographer.name}</h2>
        </a>
        <p class="location">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="tagline">${this._photographer.tagline}</p>
        <p class="price">${this._photographer.price}€/jour</p>
        `

        $wrapper.innerHTML = photographerCard;
        return $wrapper;
    }



}