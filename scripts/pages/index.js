class App {
    constructor() {
        this._photographersSection = document.getElementById("photographer_section");
    }

    async getData() {
        const api = new Api("data/photographers.json");
        const photographersData = await api.getPhotographers();
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
        allPhotographerCards.forEach(element => element.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("photographer id: " + element.id);
            const url = new URL("http://127.0.0.1:5500/Front-End-Fisheye/photographer.html");
            url.searchParams.append("photographer", element.id);
            location.href = url;

        }));
        return selected;

    }

    async init() {
        let photographers = await this.getData();
        await this.displayData(photographers);
        this.handleClick(photographers);
    };
}

const app = new App();
app.init();

