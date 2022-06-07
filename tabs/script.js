// Selecting required elements
const tabButtons = document.querySelectorAll(`[role="tab"]`);
const tabPanels = Array.from(document.querySelectorAll(`[role="tabpanel"]`));

// handleTabClick function
function handleTabClick(e) {
    // setting all tabs as unselected
    tabButtons.forEach((tabButton) => {
        tabButton.setAttribute(`aria-selected`, `false`);
    })
    // setting all tabpanels as hidden
    tabPanels.forEach((tabPanel) => {
        tabPanel.setAttribute(`hidden`, `true`);
    })
    // setting clicked tab as selected
    const tabSelected = e.currentTarget;
    tabSelected.setAttribute(`aria-selected`, `true`);
    // showing associated tabPanel
    const { id } = tabSelected;
    const tabPanel = tabPanels.find(
        (panel) => panel.getAttribute(`aria-labelledby`) === id
    );
    tabPanel.hidden = false;
}

// Listening for tab clicks
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener(`click`, handleTabClick);
})

// Selecting Elements for Scroll To Accept Functionality
const terms = document.querySelector(`.two`);
const line = terms.lastElementChild;
const agree = document.querySelector(`.agree`);

// obCallback for IO
function obCallback(payload) {
    if (payload[0].isIntersecting === true) {
        agree.setAttribute(`disabled`, `false`);
        observer.unobserve(line);
    }
}

// Creating new IO watching intersection between terms and terms hr
const observer = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});
observer.observe(line);
