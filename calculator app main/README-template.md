# QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot
![](./design/desktop-preview.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div>
  
    <header>
      <nav>
        <h1>cal</h1>
        <div>
        <h2>THEME</h2>
        <div class="numbers">
          <p id="zero">1</p>
          <p id="one">2</p>
          <p id="two">3</p>
        </div>
        
        <div class="flex-items">
          <div class="switch" id="toggle-Switch">
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  </header>
  
  <main>
    <section>
      <h2 id="display">
        399, 981
      </h2>
    </section>

    <section>
      <div class="button-container">
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div id="del-key">DEL</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>+</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>-</div>
        <div>.</div>
        <div>0</div>
        <div>/</div>
        <div>x</div>
        <div id="del-key1">RESET</div>
        <div id="orange-key">=</div>
      </div>

    </section>
    <script type="text/javascript" src="index.js"></script>
  </main>
</div>
```
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    background: 0;
}

body {
    font-family: 'League Spartan', sans-serif;
    background-color: var(--background);
}

h1,
h2,
.numbers {
    color: var(--h2-color);
}

header nav h2 {
    font-size: 1rem;
    padding-top: 1rem;
    margin-right: -8rem;
}


main,
header {
    max-width: 500px;
    margin: auto;
    padding: 1rem;
}

main {
    padding-top: 0;
}

header nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-size: 2rem;
    padding-top: 0.5rem;
}

.button-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    font-size: 2rem;

}

.numbers {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.flex-items {
    display: flex;
}

.switch {
    padding-right: 0.4rem;
    height: 1.2rem;
    width: 60px;
    border-radius: 40px;
    background-color: var(--Calculator-background);
    display: flex;
    align-items: center;
    cursor: pointer;
}

.switch span {
    width: 14px;
    height: 14px;
    background-color: var(--orange-key);
    border-radius: 50%;

}

.switch span:active {
    background-color: var(--Equal-to-hover);
}

.button-container>div {
    display: flex;
    align-items: center;
    /* Vertically center content */
    justify-content: center;
    /* Horizontally center content */
    padding: 10px;
    /* Adjust spacing inside items as desired */
    background-color: var(--light-gray-key);
    box-shadow: 0 3px var(--light-grey-key-shadow);
    border-radius: 5px;
    color: var(--Keypad-color);
    cursor: pointer;
}

.button-container>div:active {
    background-color: var(--hover-state);
    transform: translateY(4px);
}


#del-key {
    background-color: var(--Del-key);
    box-shadow: 0 3px var(--Del-key-shadow);
    color: var(--Reset-del-and-equal-to-color);
}

#del-key1 {
    background-color: var(--Del-key);
    box-shadow: 0 3px var(--Del-key-shadow);
    color: var(--Reset-del-and-equal-to-color);
}

#del-key:active {
    background-color: var(--Reset-and-del);
}

#del-key1:active {
    background-color: var(--Reset-and-del);
}

#orange-key {
    background-color: var(--orange-key);
    box-shadow: 0 3px var(--orange-key-shadow);
    color: var(--cyan-keypad-color);
}

#orange-key:active {
    background-color: var(--Equal-to-hover);
}

/* Make the last two divs span 2 columns each */
.button-container>div:nth-last-child(2),
.button-container>div:last-child {
    grid-column: span 2;
}

section:first-of-type {
    background-color: var(--screen-background);
    padding: 2rem 1rem;
    margin: 1rem 0 1.2rem;
    border-radius: 8px;
}

section:first-of-type h2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 1em;
}

section:nth-of-type(2) {
    background-color: var(--Calculator-background);
    padding: 1rem;
}

.attribution {
    font-size: 1rem;
    text-align: center;
    color: var(--Keypad-color);
}

.attribution a {
    color: var(--Keypad-color);
    text-decoration: none;
}

@media screen and (min-width: 768px) {
    header {
        margin-top: 4rem;
    }

    header nav h2 {
        margin-right: -12rem;
    }
}

```
```js
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
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Project Preview](./README.md) - This helped me see how the project is. And I really liked this pattern and will use it going forward.
- [Style-guide](./style-guide.md) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [MD Hasanur Jaman](https://www.winfohouse.blogspot.com)
- Frontend Mentor - [@hasanur82](https://www.frontendmentor.io/profile/hasanur82)
- Facebook - [@hasanur82](https://www.facebook.com/hasanur82)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.