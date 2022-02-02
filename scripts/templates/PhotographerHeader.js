class PhotographerHeader {
    constructor(photographer) {
        this._photographer = photographer;
        this.$wrapper = document.createElement("div");
        this.$HeaderWrapper = document.querySelector(".photograph-header");
        this.$modalContainer = document.querySelector("#modal-container");
        this._header = document.querySelector(".photographerPage-header");
        this._main = document.querySelector("#main");
    }

    displayHeader() {
        const imagePath = "assets/photographers/";
        const header = `
        <div class="photographer-info">
            <h2 class="PhotographerName">${this._photographer.name}</h2>
            <p class="PhotographerLocation">${this._photographer.city}, ${this._photographer.country}</p>
            <p class="PhotographerTagline">${this._photographer.tagline}</p>
        </div>
            <button class="contact_button">Contactez-moi</button>
        <img class="PhotographerProfile" src= ${imagePath}${this._photographer.portrait} alt="${this._photographer.name}" />
        `;
        this.$wrapper.innerHTML = header;
        this.unableContactMeBtn();
        this.$HeaderWrapper.appendChild(this.$wrapper);
    }

    unableContactMeBtn() {
        this.$wrapper.querySelector(".contact_button")
            .addEventListener("click", () => {
                const Template = new ContactTemplate(this._photographer.name, this._photographer.id);
                Template.displayForm();
                this._header.classList.add("blurry");
                this._main.classList.add("blurry");
                Template.handleCloseModal();
            });
    }
}