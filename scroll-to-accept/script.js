// Selecting Required Elements
const read = document.querySelector(`.terms-and-conditions`);
const agree = document.querySelector(`.agree`);
// callback function for IO
function callback(payload) {
    if (payload[0].isIntersecting === true) {
      agree.removeAttribute(`disabled`);
      observer.unobserve(read.lastElementChild);
    }
}

// creating new Intersection Observer
let observer = new IntersectionObserver(callback, {
    root: read,
    threshold: 1,
});

// asking IO to observe intersection of read with line
observer.observe(read.lastElementChild);
