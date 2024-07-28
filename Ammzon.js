const images = [
    "./photo/Aimg.jpg",
    "./photo/Aimg1.jpg",
    "./photo/Aimg2.jpg",    
    "./photo/Aimg3.jpg",
    "./photo/Aimg4.jpg",
    "./photo/Aimg5.jpg",
    "./photo/Aimg6.jpg"
];

let currentIndex = 0;
 


function changeBackgroundImage() {
    const heroSection = document.querySelector('.hero-section');
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length; 
}


changeBackgroundImage();

// Function to start the slideshow with a specified interval
function startSlideshow() {
    setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds (5000 milliseconds)
}

// Start the slideshow when the page loads
window.onload = startSlideshow;

