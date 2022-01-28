class photographer {
    constructor() {
        this._header = document.querySelector(".photograph-header");
        this._mediaSection = document.querySelector(".media");
        this.init();
    }

    async init() {
        let id = this.retrieveId();
        let allPhotographers = await this.retrievePhotographers();
        let allMedia = await this.retrieveAllMedia();

        await this.findPhotographer(allPhotographers, id).then((p) => { this.displayInfo(p) });
        await this.retrieveMedia(allMedia, id).then((m) => this.displayMedia(m));
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
        return clickedOn;
    }

    async retrieveAllMedia() {
        let api = new Api("data/photographers.json");
        let media = await api.getMedia();
        return media;
    }

    async retrieveMedia(allMedia, id) {
        let result = allMedia.filter(element => element.photographerId == id);
        return result;
    }

    displayInfo(p) {
        const person = new Photographer(p[0]);
        let newPage = new PhotographerHeader(person);
        newPage.displayHeader();
    }

    displayMedia(media) {
        media.forEach(m => {
            let name = this.getNameFromId(m.photographerId);
            if (m.video) {
                const Template = new VideoTemplate(m, name);
                this._mediaSection.appendChild(Template.displayMediaTemplate());
            }
            else {
                const Template = new ImageTemplate(m, name);
                this._mediaSection.appendChild(Template.displayMediaTemplate());
            }


        })
    }

    getNameFromId(id) {
        let name = "";
        switch (id) {
            case 243: return name = "Mimi";
                break;
            case 930: return name = "Ellie Rose";
                break;
            case 82: return name = "Tracy";
                break;
            case 527: return name = "Nabeel";
                break;
            case 925: return name = "Rhode";
                break;
            case 195: return name = "Marcel";
                break;
            default: return name = "Mimi";
        }
    }

}
const page = new photographer();





