const car1Images = [
    "Sell image/BMW X61.webp",
    "Sell image/BMW X6 2.webp",
    "Sell image/BMW X6 3.webp"
];

const car2Images = [
    "Sell image/Jaguar F-pace 1.webp",
    "Sell image/Jaguar F-pace 2.webp",
    "Sell image/Jaguar F-pace 3.webp"
];

const car3Images = [
    "Sell image/Range Rover Velar 1.webp",
    "Sell image/Range Rover Velar 2.webp",
    "Sell image/Range Rover Velar 3.webp"
];

let car1Index = 0;
let car2Index = 0;
let car3Index = 0;

function changeImage(carId, images, index) {
    const carElement = document.getElementById(carId).querySelector('img');
    carElement.src = images[index];
}

function startSlideshow() {
    setInterval(() => {
        car1Index = (car1Index + 1) % car1Images.length;
        car2Index = (car2Index + 1) % car2Images.length;
        car3Index = (car3Index + 1) % car3Images.length;

        changeImage('car1', car1Images, car1Index);
        changeImage('car2', car2Images, car2Index);
        changeImage('car3', car3Images, car3Index);
    }, 5000); // 5000 milliseconds = 5 seconds
}

window.onload = startSlideshow;
