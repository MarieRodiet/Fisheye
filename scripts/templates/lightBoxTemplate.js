class LightBoxTemplate {
    constructor(media) {
        //array of url for all the media
        this.media = media;
        //id of the current media
        this.$wrapper = document.createElement("section");
    }

    displayLightBox() {
        this.$wrapper.className = "lightbox";
        const box = `
        <h1>${this.media.title}</h1>
        `;
        this.$wrapper.innerHTML = box;
        return this.$wrapper;

    }
}