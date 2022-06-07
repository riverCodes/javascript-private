// grabbing required elements
const outerModal = document.querySelector(`.outer-modal`);
const innerModal = document.querySelector(`.inner-modal`);
const buttons = document.querySelectorAll(`.learn-more`);

// clickHandler function
function buttonClickHandler(e) {
    // selecting required nodes and assigning them to variables
    const card = e.currentTarget.parentElement;
    const img = card.querySelector(`img`);
    const imgTitle = card.querySelector(`h2`).textContent; 
    const { src } = img;
    const imgDesc = img.dataset.description;

    // modal pop-up on clicking button. injecting HTML inside modal.
    outerModal.setAttribute(`open`, `true`);
    innerModal.innerHTML = `
    <img src="${src.replace(`200`, `400`)}" alt="" data-description="${imgDesc}" />
    <h2>${imgTitle}</h2>
    <p>${imgDesc}</p>
    `;
}

// listening for button clicks
buttons.forEach((button) => {
    button.addEventListener(`click`, buttonClickHandler);
})

// modalClickHandler function
function modalClickHandler(e) {
    const isOutside = !e.target.closest(`.inner-modal`);
    if (isOutside === true) {
        outerModal.setAttribute(`open`, `false`);
    }
}

// listening for clicks on outerModal
outerModal.addEventListener(`click`, modalClickHandler);

// keyboard functionality for closing pop-up
function keydownHandler(e) {
    if (e.key === `Escape`) {
        outerModal.setAttribute(`open`, `false`);
    }
}

window.addEventListener(`keydown`, keydownHandler);
