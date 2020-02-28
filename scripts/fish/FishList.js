import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"
//import fish

/**
 *  FishList which renders individual fish objects as HTML
 */

const FishList = () => {

    const contentElement = document.querySelector(".allfish")
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    for (const fish of fishes) {
        let fishHTMLRepresentations = Fish(fish)
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       contentElement.innerHTML += fishHTMLRepresentations
    }

    // Add a section, and all of the fish to the DOM
}

export default FishList