const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        ) 
    }
    
    
    const allDetailButtons = document.querySelectorAll(".fishButton")
    
        // Add an event listener to each one
        for (const btn of allDetailButtons) {
            btn.addEventListener(
                "click",
                theEvent => {
                
                    const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                    const theDialog = document.querySelector(dialogSiblingSelector)
                    theDialog.showModal()
                }
            )
        }

}    



export default initializeDetailButtonEvents