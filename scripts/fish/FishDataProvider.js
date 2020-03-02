const fishCollection = [
{
    name: "Reginald",
    species: "goldfish",
    size: "6 cm",
    location: "Hawaii",
    food: ["Flakes", "Hats"],
    image: "images/newfish.webp"
},
{
    name: "Geraldine",
    species: "shark",
    size: "1 ft",
    location: "Florida",
    food: ["legs", "fish"],
    image: "images/newfish.webp"
},
{
    name: "Francois",
    species: "blue gill",
    size: "8 cm",
    location: "Apartment Complex",
    food: ["worms"],
    image: "images/newfish.webp"
},

{
    name: "Jose",
    species: "Catfish",
    size: "1 ft",
    location: "Cumberland River",
    food: ["flies"],
    image: "images/newfish.webp"
},

{
    name: "Emmanuel",
    species: "Blue Whale",
    size: "32 ft",
    location: "Pacific Ocean",
    food: ["krill"],
    image: "images/newfish.webp"
},

{
    name: "Sally",
    species: "Sting Ray",
    size: "2 ft",
    location: "Atlantic Ocean",
    food: ["weird stuff"],
    image: "images/newfish.webp"
},


]

export const useFish = () => {
    return fishCollection.slice()


}
