

async function getPhotographers() {
    //const api = new Api("../../data/photographers.json");
    //const data = await api.getData();
    //const apiPhotographers = data.map(element => new Photographer(element));
    let photographers = [{
        "name": "Mimi Keel",
        "id": 243,
        "city": "London",
        "country": "UK",
        "tagline": "Voir le beau dans le quotidien",
        "price": 400,
        "portrait": "MimiKeel.jpg"
    },
    {
        "name": "Ellie-Rose Wilkens",
        "id": 930,
        "city": "Paris",
        "country": "France",
        "tagline": "Capturer des compositions complexes",
        "price": 250,
        "portrait": "EllieRoseWilkens.jpg"
    },
    {
        "name": "Tracy Galindo",
        "id": 82,
        "city": "Montreal",
        "country": "Canada",
        "tagline": "Photographe freelance",
        "price": 500,
        "portrait": "TracyGalindo.jpg"
    },
    {
        "name": "Nabeel Bradford",
        "id": 527,
        "city": "Mexico City",
        "country": "Mexico",
        "tagline": "Toujours aller de l'avant",
        "price": 350,
        "portrait": "NabeelBradford.jpg"
    },
    {
        "name": "Rhode Dubois",
        "id": 925,
        "city": "Barcelona",
        "country": "Spain",
        "tagline": "Je crée des souvenirs",
        "price": 275,
        "portrait": "RhodeDubois.jpg"
    },
    {
        "name": "Marcel Nikolic",
        "id": 195,
        "city": "Berlin",
        "country": "Germany",
        "tagline": "Toujours à la recherche de LA photo",
        "price": 300,
        "portrait": "MarcelNikolic.jpg"
    }];
    return photographers;
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
    let photographers = await getPhotographers();
    await displayData(photographers);
    //displayData;
    //fetch photographers
    //photographers.forEarch(photographer => {
    //const Template = new photographerCard(photographer);
    //this.$photographerSection.appendChild(Template.createPhotographerCard)
};


init();
