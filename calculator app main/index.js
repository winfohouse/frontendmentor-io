let switchSpan = document.querySelector(".switch span");
let pElements = document.querySelectorAll(".numbers p");
let switchContainer = document.querySelector(".switch");
let body = document.querySelector("body");

switchContainer.addEventListener("click", function(event) {
    let segmentWidth = switchContainer.offsetWidth / 3;
    let clickedSegment = Math.floor((event.clientX - switchContainer.getBoundingClientRect().left) / segmentWidth);
    let newPosition = pElements[clickedSegment].offsetLeft - switchSpan.parentElement.offsetLeft;
        switchSpan.style.transform = `translateX(${newPosition}px)`;


        switch (clickedSegment) {
        case 0:
            body.className = ""; 
            break;
        case 1:
            body.className = "theme-2";
            break;
        case 2:
            body.className = "theme-3";
            break;
    }
});


// Displaying clicked number or symbol in the <h2> display screen
const display = document.getElementById('display');
const gridContainer = document.querySelector('.button-container');

gridContainer.addEventListener('click', function(event) {
    if (event.target !== gridContainer) {
        const value = event.target.innerText;

        switch (value) {
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case 'RESET':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText.replace(/x/g, '*'));
                } catch (error) {
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += value;
                break;
        }
    }
});