//Get element nav and header
const dropDownList = document.querySelector("nav");
const banner = document.querySelector("header");

//Create element with image for later access to nav
//Add element to header
let openDropDown = document.createElement("img");
openDropDown.setAttribute("class", "banner__dropDown");
openDropDown.src = "images/dropdown.png";
banner.appendChild(openDropDown);

//Create element with image for later exit from nav
//Add element to nav
let exitDropDown = document.createElement("img");
exitDropDown.setAttribute("class", "navBar__exit");
exitDropDown.src = "images/close.png";
dropDownList.appendChild(exitDropDown);

//create element for later fade out effect for background
//Add element to header
let fadeBackgrd = document.createElement("span");
fadeBackgrd.setAttribute("class", "banner__fadeBackgrd");
banner.appendChild(fadeBackgrd);

//access to nav
//add eventlistener to img and possibility to fade out effect for background
//and to fade in nav
openDropDown.addEventListener("click", showdropDown);
function showdropDown() {
    let opacity = 0;

    let fadeOut = setInterval(() => {
        if (opacity >= 0.50) {
            clearInterval(fadeOut);
        }
        fadeBackgrd.style.opacity = opacity;
        opacity += 0.01;
        fadeBackgrd.style.display = "flex";
        fadeBackgrd.style.zIndex = "1";
    }, 4);

    setTimeout(() => {
        let fadeIn = setInterval(() => {
            if (opacity >= 1.00) {
                clearInterval(fadeIn);
            }
            dropDownList.style.opacity = opacity;
            opacity += 0.01;
            dropDownList.style.display = "flex";
            dropDownList.style.zIndex = "2";
            exitDropDown.style.display = "none";
        }, 5);
    }, 196);

    setTimeout(() => {
        let fadeInExit = setInterval(() => {
            if (opacity >= 1.00) {
                clearInterval(fadeInExit);
            }
            exitDropDown.style.opacity = opacity;
            opacity += 0.01;
            exitDropDown.style.display = "flex";
            exitDropDown.style.zIndex = "2";
        }, 5);
    }, 691);
}

//exit from nav
//add eventlistener to image for exit
exitDropDown.addEventListener("click", closedropDown);
function closedropDown() {
    dropDownList.style.display = "none";
    fadeBackgrd.style.display = "none";
}
