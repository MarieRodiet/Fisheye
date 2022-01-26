function displayHeader(photographer) {
    const $wrapper = document.createElement("div");
    const imagePath = "assets/photographers/";
    const header = `
            <h2 class="profileName">${photographer.name}</h2>
            <p class="location">${photographer.city}, ${photographer.country}</p>
            <p class="tagline">${photographer.tagline}</p>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class="profile" src= ${imagePath}${photographer.portrait} alt="${photographer.name}" />
        `
    $wrapper.innerHTML = header;
    return $wrapper;
}