import Photographer from "./../models/Photograper.js";
import Api from "../api/api.js";
import PhotographerHeader from "./../templates/PhotographerHeader.js";
import PriceLikesTemplate from "./../templates/PriceLikesTemplate.js";
import LightBoxTemplate from "./../templates/lightBoxTemplate.js";
import MediaFactory from "../Factory/MediaFactory.js";

class photographer {
    constructor() {
        this._mediaSection = document.querySelector(".media");
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
        this.addedLikes = 0;
        this.id = -1;

        this.unableLightBox = this.unableLightBox.bind(this);
        this.handleLikes = this.handleLikes.bind(this);
    }

    async init() {
        //get photographer's id from url
        this.id = this.retrieveId();
        //get all photophraphers and all media
        this.AllPhotographers = await this.retrievePhotographers();
        this.AllMedia = await this.retrieveAllMedia();

        await this.retrieveData(this.AllPhotographers, this.id, "id").then((p) => {
            const person = new Photographer(p[0]);
            this.Photographer = person;
            this.price = person.price;
            this.displayInfo(person);
        });
        //get the photographer's media and display, unable sorter and lightbox
        await this.retrieveData(this.AllMedia, this.id, "photographerId").then((m) => {
            this.Media = m;
            this.displayMedia(m);
            this.unableSorter();
            this.unableLightBox(this.id);
        })

        this.handlePriceLikesBox(this.price, this.addedLikes);
        this.handleLikes();

    }

    retrieveId() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('photographer');
        return id;
    }

    async retrievePhotographers() {
        let api = new Api("data/photographers.json", "photographers");
        let photographers = await api.getJsonData();
        return photographers;
    }

    async retrieveAllMedia() {
        let api = new Api("data/photographers.json", "media");
        let media = await api.getJsonData();
        return media;
    }

    async retrieveData(data, value, property) {
        let result = data.filter(element => element[property] == value);
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
            const Template = new MediaFactory(m, this.name);
            this._mediaSection.appendChild(Template.displayMediaTemplate());
        })
        this.addedLikes = likes;
    }

    //increment likes under picture and in PriceLikesBox
    handleLikes() {
        let hearts = document.querySelectorAll(".media .media-element .svg-box");
        hearts.forEach(h => h.addEventListener("click", () => {
            this.addedLikes += 1;
            let index = -1;
            for (const media of this.Media) {
                if (media.id == h.id) {
                    media.likes++;
                    index = this.Media.indexOf(media);
                }
            }
            this._infoBox.innerHTML = "";
            let nodeList = document.querySelectorAll(".media-element .picture-box .heart-content .likes");
            nodeList[index].innerHTML = "";
            nodeList[index].innerHTML = this.Media[index].likes;
            this.handlePriceLikesBox(this.price, this.addedLikes);
        }));
    }

    handlePriceLikesBox(price, likes) {
        const Box = new PriceLikesTemplate(price, likes);
        this._infoBox.appendChild(Box.displayPriceAndLikes());
    }

    unableLightBox() {
        let boxes = document.querySelectorAll(".media .photo, .media .video");
        boxes.forEach(el => el.addEventListener("click", event => {
            this.openLightBox(event);
        }));
        boxes.forEach(el => el.addEventListener("keypress", event => {
            if (event.key === 'Enter') {
                this.openLightBox(event);
            }
        }));
    }

    openLightBox(event) {
        const LightBox = new LightBoxTemplate(this.Media, event.target.id, this.name);
        LightBox.displayLightBox();
        this._photographerPageHeader.style.display = "none";
        this._main.style.display = "none";
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
                this.unableSorter();
                this.unableLightBox(this.id);
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
page.init();





