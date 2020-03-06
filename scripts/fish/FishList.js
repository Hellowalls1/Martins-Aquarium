
  
import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";
import Fish from "./Fish.js";

const contentTarget = document.querySelector(".fish")



// import { useFish } from "./FishDataProvider.js"
// import Fish from "./Fish.js"
// //import fish

// /**
//  *  FishList which renders individual fish objects as HTML
//  */

// const FishList = () => {

//     const contentElement = document.querySelector(".allfish")
//     const fishes = useFish()

//     // Generate all of the HTML for all of the fish
//     for (const fish of fishes) {
//         let fishHTMLRepresentations = Fish(fish)
//         /*
//             Invoke the Fish component function
//             and pass the current fish object as an argument.
//             Each time, add the return value to the
//             fishHTMLRepresentations variable with `+=`
//         */
//        contentElement.innerHTML += fishHTMLRepresentations
//     }

//     // Add a section, and all of the fish to the DOM
// }

// export default FishList

// // import  mostHolyFist in to by typing it in brackets at the top of the page
const FishList = () => {
    let fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation

    }

    fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }

    fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }
}

export default FishList