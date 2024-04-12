const images = [
    {
        url: "./images/image-0.jpg",
        color: "#333c45"
    },
    {
        url: "./images/image-1.jpg",
        color: "#060606"
    },
    {
        url: "./images/image-2.jpg",
        color: "#99a9aa"
    },
    {
        url: "./images/image-3.jpg",
        color: "#c5b943"
    },
];

const imageParent = document.getElementById('image-wrapper');

function loadImages() {
    for (let i = 0; i < images.length; i++) {
        const newImage = document.createElement('img');
        newImage.src = images[i].url;
        newImage.classList.add('image');
        newImage.id = "image-" + i;

        const firstChild = imageParent.firstChild;
        imageParent.insertBefore(newImage, firstChild);
        
        if (i === 0) {
            continue;
        }

        newImage.classList.add('hidden');
    }
}

const leftArrow = document.getElementById('arrow-1');
const rightArrow = document.getElementById('arrow-2');

let currentImage = 0;

leftArrow.addEventListener('click', () => {
    if (currentImage === 0) {
        return;
    }

    currentImage--;
    changeImage(1);
});

rightArrow.addEventListener('click', () => {
    if (currentImage === images.length - 1) {
        return;
    }
    
    currentImage++;
    changeImage(-1);
})

function changeImage(previous) {
    const previousElement = document.getElementById('image-' + (currentImage + previous));
    console.log(previousElement);
    previousElement.classList.add('hidden');

    const currentElement = document.getElementById('image-' + currentImage);
    currentElement.classList.remove('hidden');

    document.documentElement.style.setProperty('--background-color', images[currentImage].color);
}

loadImages();




// const circlesParent = document.getElementById('circles');

// function createCircles() {
//     for (let i = 0; i < images.length; i++) {
//         const newCircle = document.createElement('div');
//         newCircle.classList.add('circle');

//         circlesParent.appendChild(newCircle);

//         (function(index) {
//             newCircle.addEventListener('click', () => {
//                 currentImage = index;
//                 changeImage();
//             });
//         })(i);
//     }
// }