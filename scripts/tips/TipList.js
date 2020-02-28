import { useTip } from "./TipDataProvider.js";
import Tip from "./Tip.js"



const TipList = () => {


    const contentElement = document.querySelector(".tips_list")
    const tips = useTip()

    //Generate all of the HTML for all of the tips
    for (const tip of tips) {
        contentElement.innerHTML += Tip(tip)
        // // Invoke the Tip component function and pass the 
        // current tip Object as an argument. 
        // Each TimeRanges, add the return value to the 
        // tipHTMLRepresentations variable with '+='


      
    }
        //Add a section, and all of the tip to the the DOM

}

export default TipList







