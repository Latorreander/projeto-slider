const images = document.querySelectorAll(".slide");
const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");

let currentImage = 0;

forwardArrow.addEventListener("click", () => {
    if (currentImage === images.length - 1) {
        return;
    }
    currentImage++;

    hideOpenImage();
    showImage();
    showOrHideArrows();
});

backArrow.addEventListener("click", () => {
    if (currentImage === 0) {
        return;
    }
    currentImage--;

    hideOpenImage();
    showImage();
    showOrHideArrows();
});

function showImage() {
    images[currentImage].classList.add("show");
}

function hideOpenImage() {
    const openImage = document.querySelector(".show");
    openImage.classList.remove("show");
}

function showOrHideArrows() {
    const itsNotTheFirstImage = currentImage !== 0;
    if (itsNotTheFirstImage) {
        backArrow.classList.remove("opacity");
    } else {
        backArrow.classList.add("opacity");
    }

    const itsTheLastImage =
        currentImage === images.length - 1 && currentImage !== 0;
    if (itsTheLastImage) {
        forwardArrow.classList.add("opacity");
    } else {
        forwardArrow.classList.remove("opacity");
    }
}
