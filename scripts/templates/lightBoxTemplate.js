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

                <figure class="lightbox-figure">
                    <video class="lightbox-video" id=${media.id} width="350" height="300" autoplay muted>
                    <source src="assets/images/${this.photographerName}/${media.video}" type="video/mp4">
                            Votre navigateur ne permet pas de lire les vidéos.
                    </video>
                    <figcaption>
                        ${media.title}
                    </figcaption>
                </figure>

                <div class="arrow-box next">
                    <svg role="img" viewBox="0 0 320 512">
                    <g><path class="svg" fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg></g>
                </div>
                
                <div class="close_lightbox">
                    <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                        <g><path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="currentColor"/></g>
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
                <figure class="lightbox-figure">
                    <img class="lightbox-image" id=${media.id} src="assets/images/${this.photographerName}/${media.image}" alt=${media.title} />
                    <figcaption>
                        ${media.title}
                    </figcaption>
                </figure>
                <div class="arrow-box next">
                    <svg role="img" viewBox="0 0 320 512">
                    <g><path class="svg" fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg></g>
                </div>
                
                  <div class="close_lightbox">
                    <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                        <g><path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="currentColor"/></g>
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
        window.addEventListener("keyup", (event) => {
            if (event.key === "Escape") {
                this.closelightbox();
            }
        });
        this.$wrapper.querySelector(".close_lightbox").addEventListener("click", () => {
            this.closelightbox();
        });
    }

    closelightbox() {
        this.$lightboxContainer.innerHTML = "";
        this._photographerPageHeader.style.display = "block";
        this._main.style.display = "block";
    }

    handleNext() {
        this.$wrapper.querySelector(".next").addEventListener("click", () => {
            this.next();
        });
        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight") {
                this.next();
            }
        })
    }

    next() {
        const max = this.length - 1;
        if (this.index < max) {
            this.index += 1;
        }
        else {
            this.index = 0;
        }
        this.$lightboxContainer.innerHTML = "";
        this.displayLightBox();
    }

    previous() {
        if (this.index == 0) {
            this.index = this.length - 1;
        }
        else {
            this.index--;
        }
        this.$lightboxContainer.innerHTML = "";
        this.displayLightBox();
    }

    handlePrevious() {
        this.$wrapper.querySelector(".previous").addEventListener("click", () => {
            this.previous();
        });
        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                this.previous();
            }
        })
    }
}
