
// import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'

import FishList from './FishList.js'
const allTheFish = useFish()

for (const fish of allTheFish) {
   console.log(fish)
    
}



const arrayOfTheFishObjects = useFish()

for (const currentFishObject of arrayOfTheFishObjects) {
    console.log(currentFishObject)
}
// initializeDetailButtonEvents()



FishList()