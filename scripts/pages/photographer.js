class photographer {
    constructor() {
        this._mediaSection = document.querySelector(".media");
        this._filter = document.querySelector("#filter");
        this._infoBox = document.querySelector(".likes-price");
        this._photographerPageHeader = document.querySelector(".photographerPage-header");
        this._modalContainer = document.querySelector("#modal-container");
        this._main = document.querySelector("#main");

        this.AllPhotographers = [];
        this.AllMedia = [];

        this.Photographer = {};
        this.Media = [];
        this.price = 0;
        this.name = "";

        this.init();
        this.unableLightBox = this.unableLightBox.bind(this);
    }

    async init() {
        this.id = this.retrieveId();
        this.AllPhotographers = await this.retrievePhotographers();
        this.AllMedia = await this.retrieveAllMedia();

        await this.findPhotographer(this.AllPhotographers, this.id).then((p) => {
            const person = new Photographer(p[0]);
            this.Photographer = person;
            this.price = person.price;
            this.displayInfo(person);
        });
        await this.retrieveMedia(this.AllMedia, this.id).then((m) => {
            this.displayMedia(m);
            this.unableSorter();
            this.unableLightBox(this.id);
        });
    }

    retrieveId() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('photographer');
        return id;
    }

    async retrievePhotographers() {
        let api = new Api("data/photographers.json");
        let photographers = await api.getPhotographers();
        return photographers;
    }

    async findPhotographer(photographers, id) {
        let clickedOn = photographers.filter(element => element.id == id);
        this.Photographer = clickedOn;
        return clickedOn;
    }

    async retrieveAllMedia() {
        let api = new Api("data/photographers.json");
        let media = await api.getMedia();
        return media;
    }

    async retrieveMedia(allMedia, id) {
        let result = allMedia.filter(element => element.photographerId == id);
        this.Media = result;
        return result;
    }

    displayInfo(person) {
        let newPage = new PhotographerHeader(person);
        newPage.displayHeader();
        newPage.unableContactMeBtn();
    }

    displayMedia(media) {
        let likes = 0;
        media.forEach(m => {
            this.name = this.getNameFromId(m.photographerId);
            likes += m.likes
            const Template = new MediaTemplate(m, this.name, this.price);
            this._mediaSection.appendChild(Template.displayMediaTemplate());
        })
        const Box = new PriceLikesTemplate(this.price, likes);
        this._infoBox.appendChild(Box.displayPriceAndLikes());
    }

    unableLightBox() {
        let boxes = document.querySelectorAll(".media .media-element");
        boxes.forEach(el => el.addEventListener("click", event => {
            const LightBox = new LightBoxTemplate(this.Media, event.target.id, this.name);
            LightBox.displayLightBox();
            this._photographerPageHeader.style.display = "none";
            this._main.style.display = "none";
        }));

    }

    getNameFromId(id) {
        let name = "";
        switch (id) {
            case 243: name = "Mimi";
                break;
            case 930: name = "Ellie Rose";
                break;
            case 82: name = "Tracy";
                break;
            case 527: name = "Nabeel";
                break;
            case 925: name = "Rhode";
                break;
            case 195: name = "Marcel";
                break;
            default: name = "Mimi";
        }
        return name;
    }

    unableSorter() {
        document.querySelector('.select')
            .addEventListener('change', e => {
                const sorter = e.target.value;
                let sorted = this.sortMedia(sorter);
                this._mediaSection.innerHTML = ""
                this.displayMedia(sorted);
            })
    }

    sortMedia(sorter) {
        let copy = this.Media.map(el => el);
        let result = [];
        if (sorter == "popularity") {
            result = copy.sort(function (a, b) {
                return b.likes - a.likes;
            });
        }
        else if (sorter == "date") {
            result = copy.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });
        }
        else {
            result = copy.sort(function (a, b) {
                if (b.title < a.title) { return 1; }
                if (b.title > a.title) { return -1; }
                return 0;
            });
        }
        return result;
    }

}
const page = new photographer();





