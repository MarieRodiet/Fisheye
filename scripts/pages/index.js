import Api from "../api/api.js";
import PhotographerCard from "./../templates/PhotographerCard.js";

class App {
    constructor() {
        this._photographersSection = document.getElementById("photographer_section");
    }

    async init() {
        //get photographers data from api
        let photographers = await this.getData();
        //insert photographer data into html
        await this.displayData(photographers);
        //turn photographer cards into links by click on Enter key
        this.handleClick(photographers);
    }

    async getData() {
        const api = new Api("data/photographers.json", "photographers");
        const photographersData = await api.getJsonData();
        return photographersData;
    }

    async displayData(photographers) {
        photographers.forEach(photographer => {
            const Template = new PhotographerCard(photographer);
            this._photographersSection.appendChild(Template.createPhotographerCard());
        })
    }

    handleClick() {
        const allPhotographerCards = document.querySelectorAll(".card-link");
        allPhotographerCards.forEach(element => element.addEventListener("click", (event) => {
            event.preventDefault();
            this.navigateLink(element.id);
        }));
        allPhotographerCards.forEach(element => element.addEventListener("keypress", (event) => {
            event.preventDefault();
            if (event.key === 'Enter') {
                this.navigateLink(element.id);
            }
        }));
    }

    navigateLink(id) {
        let currentUrl = window.location.protocol + window.location.hostname + ":" + window.location.port + "/Fisheye";
        const url = new URL(currentUrl + "photographer.html");
        url.searchParams.append("photographer", id);
        location.href = url;
    }
}

const app = new App();
app.init();


