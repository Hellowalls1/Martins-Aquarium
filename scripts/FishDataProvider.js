const fishCollection = [
{
    name: "Reginald",
    Species: "goldfish",
    Length: "6 cm",
    Location: "Hawaii",
    Food: ["Flakes", "Hats"],
    image: "images/newfish.webp"
},
{
    name: "Geraldine",
    Species: "shark",
    Length: "1 ft",
    Location: "Florida",
    Food: ["legs", "fish"],
    image: "images/newfish.webp"
},
{
    name: "Francois",
    Species: "blue gill",
    Length: "8 cm",
    Location: "Apartment Complex",
    Food: ["worms"],
    image: "images/newfish.webp"
},

{
    name: "Jose",
    Species: "Catfish",
    Length: "1 ft",
    Location: "Cumberland River",
    Food: ["flies"],
    image: "images/newfish.webp"
},

{
    name: "Emmanuel",
    Species: "Blue Whale",
    Length: "32 ft",
    Location: "Pacific Ocean",
    Food: ["krill"],
    image: "images/newfish.webp"
},

{
    name: "Sally",
    Species: "Sting Ray",
    Length: "2 ft",
    Location: "Atlantic Ocean",
    Food: ["weird stuff"],
    image: "images/newfish.webp"
},


]

export const useFish = () => {
    return fishCollection.slice()


}
