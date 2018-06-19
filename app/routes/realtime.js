import Route from '@ember/routing/route';

const dataset = [
    {
        "imgSrc":"http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1529405850/nigerians_jojjpz.jpg",
        "id":"Nigeria",
        "fans":"Nigerian fans"
    },
    {
        "imgSrc":"http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1529405850/mexican-fans_wzfkd9.jpg",
        "id":"Mexico",
        "fans":"Mexican fans"
    },
    {
        "imgSrc":"http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1529405850/brazil_ik4yu5.jpg",
        "id":"Brazil",
        "fans":"Brazilian fans"
    },
    {
        "imgSrc":"http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1529405850/argentina_n5e2ye.jpg",
        "id":"Argetina",
        "fans":"Argentina fans"
    }
]

export default Route.extend({

    model() {
        return dataset;
    }
});
