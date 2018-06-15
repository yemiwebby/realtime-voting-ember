import Route from '@ember/routing/route';

const dataset = [
    {
        "imgSrc":"http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1528844797/nigerian-fans_eplenl.webp",
        "id":"Nigeria",
        "fans":"Nigerian fans"
    },
    {
        "imgSrc":"http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1528844797/mexico-fans_h3b7ao.webp",
        "id":"Mexico",
        "fans":"Mexican fans"
    },
    {
        "imgSrc":"http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1528844797/brazilian-fans_a7e7bh.webp",
        "id":"Brazil",
        "fans":"Brazilian fans"
    },
    {
        "imgSrc":"http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1528844797/argetina-fans_lzu9gv.webp",
        "id":"Argetina",
        "fans":"Argentina fans"
    }
]

export default Route.extend({

    model() {
        return dataset;
    }
});
