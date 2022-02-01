class ContactTemplate {
    constructor(name) {
        this._name = name;
        this._modal = document.querySelector("#contact_modal");
        this._header = document.querySelector(".photographerPage-header");
        this._main = document.querySelector("#main");
        this._body = document.querySelector(".photographer-body");
    }

    displayForm() {
        const $wrapper = document.createElement("div");
        $wrapper.className = "modal";
        //header and main need to be blurry
        this._header.className = "blurry";
        this._main.className = "blurry";
        //this._body.className = "blurry";

        const form = `
      <header class="modal-header">
        <h2>Contactez-moi <br/>${this._name}</h2>
        <img src="assets/icons/close.svg" />
      </header>
      <form>
            <label class="labels" for="firstname">Prénom</label>
            <input class="inputs" type="text" id="firstname" name="firstname"/>

            <label class="labels" for="lastname">Nom</label>
            <input class="inputs" type="text" id="lastname" name="lastname"/>

            <label class="labels" for="email">Email</label>
            <input class="inputs" type="email" id="email" name="email"/>

            <label class="labels" for="message">Votre message</label>
            <input id="message-input" type="text" id="message" name="message"/>
        <button class="contact_button">Envoyer</button>
      </form>`;
        $wrapper.innerHTML = form;
        this._modal.appendChild($wrapper);
    }
}