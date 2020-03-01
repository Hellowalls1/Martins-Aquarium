const Location = (location) => {
    return `
    
    <section class="location">
    <div>
    <img class="location__photo" src="${location.image}">
    </div>
    <div class="location__name">${location.name}</div>

    <div>
      <button class="locationbutton" id="button--thailand">Details</button>
    </div>

    <dialog class="dialog--location" id="details--${location.name}">
      <div>Tip: ${location.Tip_1} </div>
      <div>Tip: ${location.Tip_2} </div>
      <div>Tip: ${location.Tip_3} </div>


      <button class="button--close" id="close-thailand">Close Dialog</button>
    </dialog>
  </section>
`
}

export default Location