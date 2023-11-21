var menuButton = document.getElementById('menu-toggle');
var mobileNav = document.getElementById('mobileNav');
const minWidth = 1300;
            
menuButton.addEventListener('click', function() {
    if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block';
        }
    else {
        mobileNav.style.display = 'none';
        }
    });
            
window.addEventListener('resize', function () {
    if (window.innerWidth > minWidth) {
        mobileNav.style.display = 'none';
    }
});

const imgElement = document.getElementById('dynamic-image');
const images = ['./media/noe.prof2.png', './media/noe.prof3.png'];

let i = 0;

function changeImage() {
    imgElement.classList.remove('visible');
    setTimeout(() => {
        i = (i + 1) % images.length;
        imgElement.src = images[i];
        imgElement.classList.add('visible');
    }, 750); // The timeout should match the CSS transition duration
}

imgElement.addEventListener('load', function () {
    imgElement.classList.add('visible');
});

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);
