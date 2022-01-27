class photographer {
    constructor() {
        this._header = document.querySelector(".photograph-header");
        this.init();

    }

    async init() {
        let id = this.retrieveId();
        let photographers = await this.retrievePhotographers();
        this.findPhotographer(photographers, id);
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

    findPhotographer(photographers, id) {

    }

    /*displayPage(id) {
        const Template = displayHeader(photographer);
        console.log(Template);
        //this._header.appendChild(Template);
    }
    */
}
const page = new photographer();





