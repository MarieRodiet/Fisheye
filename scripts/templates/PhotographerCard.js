class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerCard() {
        const imagePath = "assets/photographers/";
        const $wrapper = document.createElement("article");
        const $link = document.createElement("a");
        $wrapper.className = "photographer_card";
        $link.className = "card-link";
        $link.setAttribute("role", "link");
        $link.setAttribute("tabindex", 0);
        $link.id = this._photographer.id;
        const linkContent = ` 
        <img class="profile" src= ${imagePath}${this._photographer.portrait} alt="" />
            <h2 class="profileName">${this._photographer.name}</h2>`;

        const photographerCard = `
        <p class="location">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="tagline">${this._photographer.tagline}</p>
        <p class="price">${this._photographer.price}€/jour</p>
        `
        $link.innerHTML = linkContent;
        $wrapper.appendChild($link);
        $wrapper.innerHTML += photographerCard;
        return $wrapper;
    }

}
