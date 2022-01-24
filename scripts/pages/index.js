
async function getData() {
    const api = new Api("data/photographers.json");
    const photographersData = await api.getPhotographers();
    return photographersData;
}

async function displayData(photographers) {
    const photographersSection = document.getElementById("photographer_section");
    photographers.forEach(photographer => {
        console.log("another photographer!");
        const Template = new PhotographerCard(photographer);
        photographersSection.appendChild(Template.createPhotographerCard());
    })
};

async function init() {
    let photographers = await getData();
    await displayData(photographers);
};


init();
