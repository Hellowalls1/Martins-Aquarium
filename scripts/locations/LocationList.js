import { useLocation } from "./LocationDataProvider";

import Location from "./Location.js";


const LocationList = () => {

     const contentElement = document.querySelector(".allLocations")
        const locations = useLocation()
    
        // Generate all of the HTML for all of the fish
        for (const location of locations) {
            let locationHTMLRepresentations = Location(location)
         
           contentElement.innerHTML += locationHTMLRepresentations
        }
    
        // Add a section, and all of the fish to the DOM
    }

    export default LocationList











