class PhotographerCard {
    constructor(photographer) {

        this._photographer = photographer;
        this.$wrapper = document.createElement("article");
        this.$wrapper.classList.add("photographer_card")
    }



    createPhotographerCard() {
        const imagePath = "assets/photographers/";
        const card = `
        <a id=${this._photographer.id} class="card-link" href="#">
            <img src= ${imagePath}${this._photographer.portrait} alt="${this._photographer.name}" />
            <h2>${this._photographer.name}</h2>
        </a>
        <p class="location">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="tagline">${this._photographer.tagline}</p>
        <p class="price">${this._photographer.price}€/jour</p>
        
        `

        this.$wrapper.innerHTML = card;
        return this.$wrapper;
    }


}