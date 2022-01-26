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

    handleClick() {
        const allPhotographerCards = document.querySelectorAll(".card-link");
        allPhotographerCards.forEach(el => el.addEventListener("click", function (event) {
            console.log("eventListener works, do something!");
            console.log("event: " + event.srcElement.alt);
            console.log("this: " + this);
            //console.log(el.attributes.id.value);
            //allPhotographerCards[i].attribute.id.value = photographer.id!
        }));
    }

    async init() {
        let photographers = await this.getData();
        await this.displayData(photographers);
        this.handleClick();
    };
}


const app = new App();
app.init();
