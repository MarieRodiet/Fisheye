class LightBoxTemplate {
    constructor(media, id, name) {
        //array of url for all the media
        this.media = media;
        this.length = media.length;
        this.id = id;
        this.photographerName = name;
        const chosen = this.media.find(el => el.id == this.id);
        this.index = this.media.indexOf(chosen);
        this.$wrapper = document.createElement("section");
        this.$lightboxContainer = document.querySelector("#lightbox-container");
        this._photographerPageHeader = document.querySelector(".photographerPage-header");
        this._main = document.querySelector("#main");

        this.closelightbox = this.closelightbox.bind(this);
    }

    displayLightBox() {
        const media = new Media(this.media[this.index]);
        this.$wrapper.className = "lightbox";

        if (media.video) {
            const videoBox = `
                <div class="arrow-box previous">
                    <svg role="img" viewBox="0 0 320 512">
                    <g><path class="svg" fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg></g>
                </div>

                <video class="lightbox-content" id=${media.id} muted src="assets/images/${this.photographerName}/${media.video}" type="video/mp4" autoplay>
                            Votre navigateur ne permet pas de lire les vidéos.
                </video>

                <div class="arrow-box next">
                    <svg role="img" viewBox="0 0 320 512">
                    <g><path class="svg" fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg></g>
                </div>
                <div class="close_lightbox">
                    <svg role="img" viewBox="0 0 352 512">
                        <g><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></g>
                    </svg>
                </div>`;
            this.$wrapper.innerHTML = videoBox;
        }
        else {
            const imageBox = `
                <div class="arrow-box previous">
                    <svg role="img" viewBox="0 0 320 512">
                        <g><path class="svg" fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg></g>
                </div>

                <img class="lightbox-content" id=${media.id} src="assets/images/${this.photographerName}/${media.image}" alt=${media.title} />

                <div class="arrow-box next">
                    <svg role="img" viewBox="0 0 320 512">
                    <g><path class="svg" fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg></g>
                </div>
                
                <div class="close_lightbox">
                    <svg role="img" viewBox="0 0 352 512">
                        <g><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></g>
                    </svg>
                </div>`;
            this.$wrapper.innerHTML = imageBox;
        }
        this.handleCloselightbox();
        this.handleNext();
        this.handlePrevious();
        this.$lightboxContainer.appendChild(this.$wrapper);
    }

    handleCloselightbox() {
        this.$wrapper.querySelector(".close_lightbox").addEventListener("click", () => {
            this.closelightbox();
        })
    }

    closelightbox() {
        this.$lightboxContainer.removeChild(document.querySelector(".lightbox"));
        this._photographerPageHeader.style.display = "block";
        this._main.style.display = "block";
    }

    handleNext() {
        this.$wrapper.querySelector(".next").addEventListener("click", () => {
            const max = this.length - 1;
            if (this.index < max) {
                this.index += 1;
                console.log("increment");
            }
            else {
                this.index = 0;
                console.log("back to zero");
            }
            this.$lightboxContainer.innerHTML = "";
            this.displayLightBox();
        })
    }

    handlePrevious() {
        this.$wrapper.querySelector(".previous").addEventListener("click", () => {
            if (this.index == 0) {
                this.index = this.length - 1;
                console.log("you decremented from max to zero");
            }
            else {
                this.index--;
                console.log("decrement");
            }
            this.$lightboxContainer.innerHTML = "";
            this.displayLightBox();
        })
    }
}
