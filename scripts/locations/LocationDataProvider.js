const locationCollection = [
    {
        name: "Hawaii",
        Tip_1: "goldfish",
        Tip_2: "6 cm",
        Tip_3: "Hawaii",
        image: "images/hawaii.jpg"
    },
    {
        name: "Thailand",
        Tip_1: "shark",
        Tip_2: "1 ft",
        Tip_3: "Florida",
        image: "images/thailand.webp"
    },
    {
        name: "San Diego",
        Tip_1: "blue gill",
        Tip_2: "8 cm",
        Tip_3: "Apartment Complex",
       
        image: "images/sandiego.jpg"
    },
    
    {
        name: "Morocco",
        Tip_1: "Catfish",
        Tip_2: "1 ft",
        Tip_3: "Cumberland River",
        image: "images/morocco.jpg"
    },
    
    {
        name: "India",
        Tip_1: "Blue Whale",
        Tip_2: "32 ft",
        Tip_3: "Pacific Ocean",
        image: "images/inia.jpg"
    },
    
    {
        name: "Spain",
        Tip_1: "Sting Ray",
        Tip_2: "2 ft",
        Tip_3: "Atlantic Ocean",
        image: "images/spain.jpg"
    },
    
    
    ]
    
    export const useLocation = () => {
        return locationCollection.slice()
    
    
    }