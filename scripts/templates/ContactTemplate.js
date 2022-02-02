class ContactTemplate {
    constructor(name, id) {
        this._name = name;
        this._id = id
        this._modalContainer = document.querySelector("#modal-container");
        this._body = document.querySelector(".photographer-body");
        this._formData = document.querySelectorAll(".formData");
        this._modal = document.querySelector(".modal");
        this._form = document.querySelector("#form");
        this.$wrapper = document.createElement("div");
        this._header = document.querySelector(".photographerPage-header");
        this._main = document.querySelector("#main");
    }

    displayForm() {
        this.$wrapper.className = "modal";
        const url = window.location.href;
        const form = `

        <header class="modal-header">
        <h2>Contactez-moi <br/>${this._name}</h2>
        <img class="close_modal" src="assets/icons/close.svg" />
        </header>

        <form name="contact" id="form" method="GET" action="${url}">
            <div class="formData">
                <label class="labels" for="firstname">Prénom</label>
                <input class="inputs" type="text" id="firstname" name="firstname" required />
            </div>

            <div class="formData">
                <label class="labels" for="lastname">Nom</label>
                <input class="inputs" type="text" id="lastname" name="lastname" required />
            </div>

            <div class="formData">
                <label class="labels" for="email">Email</label>
                <input class="inputs" type="email" id="email" name="email" required />
            </div>

            <div class="formData">
                <label class="labels" for="message">Votre message</label>
                <input id="message-input" type="text" id="message" name="message" required />
            </div>
        <button type="submit" class="contact_button">Envoyer</button>
        </form>`;
        this.$wrapper.innerHTML = form;

        //this.handleModal(this._name, this._id);
        //this.handleCloseModal();
        //this.handleData(this._name);
        this._modalContainer.appendChild(this.$wrapper);
    }

    handleCloseModal() {
        document.querySelector(".close_modal").addEventListener("click", () => {
            document.querySelector("#modal-container").removeChild(document.querySelector(".modal"));
            document.querySelector(".photographerPage-header").classList.remove("blurry");
            document.querySelector("#main").classList.remove("blurry");
        })
    }

    handleData(name) {
        //document.querySelector(".contact_button").addEventListener("submit", (event) => {
        document.querySelector("#form").addEventListener("submit", (event) => {
            event.preventDefault();
            /*Creation d'un object FormData pour avoir un ensemble de 
            paires clé/valeur représentant les champs du formulaire et leurs valeurs */
            const formData = new FormData(form);
            const entries = formData.entries();
            const data = Object.fromEntries(entries);
            console.log(name);
            console.log(data);
        });
    }



}