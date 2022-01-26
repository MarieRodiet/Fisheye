class photographer {
    constructor() {
        this._header = document.querySelector(".photograph-header");
        //this._photographer = new Photographer(photographer);
    }

    init() {
        let clickedOn = this.findPhotographer();
        this.displayPage(clickedOn);
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
        const Template = new PhotographerPage(photographer);
        console.log(Template);
        //this._header.appendChild(Template.displayHeader());
    }
}

const page = new photographer();
page.init();

