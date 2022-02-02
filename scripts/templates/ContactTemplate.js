class ContactTemplate {
    constructor(name, id) {
        this._name = name;
        this._id = id;
        this._modalContainer = document.querySelector("#modal-container");
        this._body = document.querySelector(".photographer-body");
        this._formData = document.querySelectorAll(".formData");
        this._modal = document.querySelector(".modal");
        this._form = document.querySelector("#form");
        this.$wrapper = document.createElement("div");
        this._header = document.querySelector(".photographerPage-header");
        this._main = document.querySelector("#main");

        this.closeModal = this.closeModal.bind(this);
        this.validateData = this.validateData.bind(this);
        this.handleData = this.handleData.bind(this);
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
                <input class="inputs" minlength="2" type="text" id="firstname" name="firstname" required />
            </div>

            <div class="formData">
                <label class="labels" for="lastname">Nom</label>
                <input class="inputs" minlength="2" type="text" id="lastname" name="lastname" required />
            </div>

            <div class="formData">
                <label class="labels" for="email">Email</label>
                <input class="inputs" minlength="2" type="email" id="email" name="email" required />
            </div>

            <div class="formData">
                <label class="labels" for="message">Votre message</label>
                <textarea class="inputs" minlength="2" id="message" type="text" name="message" rows="5" cols="33" required>
                </textarea>
            </div>
        <button type="submit" class="contact_button">Envoyer</button>
        </form>`;
        this.$wrapper.innerHTML = form;

        this.handleData(this._name);
        this._modalContainer.appendChild(this.$wrapper);
    }

    handleCloseModal() {
        this.$wrapper.querySelector(".close_modal").addEventListener("click", () => {
            this.closeModal();
        })
    }

    closeModal() {
        this._modalContainer.removeChild(document.querySelector(".modal"));
        this._header.classList.remove("blurry");
        this._main.classList.remove("blurry");
    }

    handleData() {
        this.$wrapper.querySelector("#form").addEventListener("submit", this.validateData);

        const inputs = this.$wrapper.querySelectorAll(".inputs");
        inputs.forEach(input => {
            input.addEventListener('change', function (event) {
                const answer = event.target.value;
                const result = document.getElementById(this.id);
                console.log(result.id);
                const onlyLettersRegex = /[a-zA-Z]{2,}/;
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (result.id == "email") {
                    if (emailRegex.test(answer)) {
                        input.className = "validInput";
                    }
                    else {
                        input.className = "invalidInput";
                    }
                }
                else {
                    if (onlyLettersRegex.test(answer)) {
                        input.className = "validInput";
                    }
                    else {
                        input.className = "invalidInput";
                    }
                }
            })
        })
    }

    validateData(event) {
        event.preventDefault();
        /*Creation d'un object FormData pour avoir un ensemble de 
        paires clé/valeur représentant les champs du formulaire et leurs valeurs */
        const formData = new FormData(form);
        const entries = formData.entries();
        const data = Object.fromEntries(entries);
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (data.firstname && data.lastname && data.email && data.message) {
            if (emailRegex.test(data.email)) {
                alert("Message envoyé!");
                console.log(data);
                this.closeModal();
            }
        }
        else {
            console.log("bad data, try again!");
        }
    }
}