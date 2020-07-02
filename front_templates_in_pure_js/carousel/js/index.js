const SEASONCOUNT = 4;
let slideIndex = 1;

(function () {
    refresh();
})();

function next() {
    ++slideIndex;
    refresh();
}

function previous() {
    --slideIndex;
    refresh();
}

function refresh() {
    if (slideIndex < 1) slideIndex = 4;
    if (slideIndex > 4) slideIndex = 1;
    let dotElement;

    switch (slideIndex) {
        case 1: {
            dotElement = document.getElementById("first");
            break;
        }
        case 2: {
            dotElement = document.getElementById("second");
            break;
        }
        case 3: {
            dotElement = document.getElementById("third");
            break;
        }
        case 4: {
            dotElement = document.getElementById("fourth");
            break;
        }

        default:
    }

    currentSlide(slideIndex, dotElement);
}

function currentSlide(index, dotElement) {

    dotElement.classList.add("active");
    let dots = document.getElementsByClassName("dot");
    for (let dot of dots) {
        if (dot === dotElement)
            continue;
        dot.classList.remove("active");
    }
    slideIndex = index;

    let pics = document.getElementsByClassName("imageContainer");

    let currentSeason;

    switch (index) {
        case 1: {
            currentSeason = document.getElementById("spring");
            break;
        }
        case 2: {
            currentSeason = document.getElementById("summer");
            break;
        }
        case 3: {
            currentSeason = document.getElementById("autumn");
            break
        }
        case 4: {
            currentSeason = document.getElementById("winter");
            break;
        }

        default:
    }

    for (let pic of pics) {
        pic.style.display = 'none';
    }

    currentSeason.style.display = 'block';

    document.getElementById("number").innerText = `${slideIndex}/${SEASONCOUNT}`;
}

function play() {
    let timerId = setInterval(() => next(), 1000);
}

