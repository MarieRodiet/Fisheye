class photographer {
    constructor() {
        this._header = document.querySelector(".photograph-header");
        let clickedOn = this.findPhotographer();
        console.log(clickedOn);
    }

    showPage() {
        console.log("here I am");
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('photographer');
        console.log(myParam)
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

    /*displayPage(id) {
        const Template = displayHeader(photographer);
        console.log(Template);
        //this._header.appendChild(Template);
    }
    */
}
const page = new photographer();
page.showPage();




