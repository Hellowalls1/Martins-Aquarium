const fishCollection = [
{
    name: "Reginald",
    species: "goldfish",
    size: "6",
    location: "Hawaii",
    food: ["Flakes", "Hats"],
    image: "images/newfish.webp"
},
{
    name: "Geraldine",
    species: "shark",
    size: "1 ",
    location: "Florida",
    food: ["legs", "fish"],
    image: "images/newfish.webp"
},
{
    name: "Francois",
    species: "blue gill",
    size: "8 ",
    location: "Apartment Complex",
    food: ["worms"],
    image: "images/newfish.webp"
},

{
    name: "Jose",
    species: "Catfish",
    size: "1 ",
    location: "Cumberland River",
    food: ["flies"],
    image: "images/newfish.webp"
},

{
    name: "Emmanuel",
    species: "Blue Whale",
    size: "32",
    location: "Pacific Ocean",
    food: ["krill"],
    image: "images/newfish.webp"
},

{
    name: "Sally",
    species: "Sting Ray",
    size: "2",
    location: "Atlantic Ocean",
    food: ["weird stuff"],
    image: "images/newfish.webp"
},


]

export const useFish = () => {
    return fishCollection.slice()


}




export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        } 
    }
    return holyFish
}

export const soldierFish = () => {
    const soldiers = []
    
    for (const fish of fishCollection) {
    if (fish.length % 5 === 0) {
        soldiers.push(fish)
    }
}
    return soldiers

}

export const nonHolyFish = () => {
    const regularFish = []

for (const fish of fishCollection) {
    if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
        regularFish.push(fish)
    } 
}
return regularFish
}


