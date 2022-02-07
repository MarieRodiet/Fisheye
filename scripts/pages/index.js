class App {
    constructor() {
        this._photographersSection = document.getElementById("photographer_section");
    }

    async init() {
        let photographers = await this.getData();
        await this.displayData(photographers);
        this.handleClick(photographers);
    };

    async getData() {
        const api = new Api("data/photographers.json");
        const photographersData = await api.getPhotographers();
        return photographersData;
    }

    async displayData(photographers) {
        let tabindex = 0;
        photographers.forEach(photographer => {
            const Template = new PhotographerCard(photographer, tabindex);
            this._photographersSection.appendChild(Template.createPhotographerCard());
            tabindex++;
        })
    };

    handleClick() {
        const allPhotographerCards = document.querySelectorAll(".card-link");
        allPhotographerCards.forEach(element => element.addEventListener("click", (event) => {
            event.preventDefault();
            this.navigateLink(element.id);
        }));
        allPhotographerCards.forEach(element => element.addEventListener("keypress", (event) => {
            event.preventDefault();
            //let ref = e.target != null ? e.target : e.srcElement;
            console.log(event.target);
            console.log(event.srcElement);
            if (event.key === 'Enter') {
                this.navigateLink(element.id);
            }
        }));
    }

    navigateLink(id) {
        const url = new URL("http://127.0.0.1:5500/MarieMoore_6_22022022/photographer.html");
        url.searchParams.append("photographer", id);
        location.href = url;
    }
}

const app = new App();
app.init();

