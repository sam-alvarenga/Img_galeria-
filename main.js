const imgWrapper = document.querySelector(".img-wrapper");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const img = document.querySelectorAll("img");
const imgWidth = img[0].clientWidth;

let index = 0;
let contador = 0;


nextBtn.addEventListener("click", () => {
    if (index < 3) {
        index++;
        imgWrapper.style.transform = `translateX(-${index * imgWidth}px)`;
    } else {
        index = 0;
        imgWrapper.style.transform = `translateX(0px)`;
    }
    console.log(index);
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        imgWrapper.style.transform = `translateX(-${index * imgWidth}px)`;
    } else {
        index = img.length - 1;
        imgWrapper.style.transform = `translateX(-${index * imgWidth}px)`;
    }
});

//passar as fotos em slides

/* const imgWrapper = document.querySelector(".img-wrapper");
const img = document.querySelectorAll(".container img");

let contador = 0;
const imgWidth = img[0].clientWidth;

function slider() {
    contador++;

    if (contador > img.length - 1) {
        contador = 0;
    }
    imgWrapper.style.transform = `translateX(${-contador * imgWidth}px)`;
}
setInterval(slider, 2000); */