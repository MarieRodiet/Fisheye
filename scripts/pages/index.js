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
            let id = element.id;
            console.log("id: " + id);
            selected = photographers.filter(el => el.id == id);
            console.log(selected);
            console.log(window.location.href);
            let url = "http://127.0.0.1:5500/Front-End-Fisheye/photographer.html";
            let parameter = "photographer=" + id;
            const urlParams = new URLSearchParams(parameter);
            const p = urlParams.get('photographer');
            alert(p);
            location.href = urlParams;
            //save in localStorage and access it

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

