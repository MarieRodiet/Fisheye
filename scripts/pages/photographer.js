class photographer {
    constructor() {
        this._header = document.querySelector(".photograph-header");
        //this._photographer = new Photographer(photographer);
        //let clickedOn = this.findPhotographer();
    }

    findPhotographer() {
        const p = {
            name: "Mimi Keel",
            id: "243",
            city: "London",
            country: "UK",
            tagline: "Voir le beau dans le quotidien",
            price: "400",
            portrait: "MimiKeel.jpg"
        };
        return p;
    }

    displayPage(photographer) {
        const Template = displayHeader(photographer);
        console.log(Template);
        //this._header.appendChild(Template);
    }
}
const page = new photographer();




