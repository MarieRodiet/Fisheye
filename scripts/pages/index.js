class App {
    constructor() {
        this._photographersSection = document.getElementById("photographer_section");
        this._api = new Api("data/photographers.json");

    }

    async getData() {
        const photographersData = await this._api.getPhotographers();
        return photographersData;
    }

    async displayData(photographers) {
        photographers.forEach(photographer => {
            const Template = new PhotographerCard(photographer);
            this._photographersSection.appendChild(Template.createPhotographerCard());
        })
    };

    handleClick(photographers) {
        let selected = {};
        const allPhotographerCards = document.querySelectorAll(".card-link");
        allPhotographerCards.forEach(el => el.addEventListener("click", (event) => {
            event.preventDefault();
            let id = el.id;
            console.log("id: " + id);
            selected = photographers.filter(el => el.id == id);
            console.log(selected);
            displayPage(selected);
        }));
        return selected;

    }

    async init() {
        let photographers = await this.getData();
        await this.displayData(photographers);
        this.handleClick(photographers);
    };
}

var selected = "";
const app = new App();
app.init();

