
/*Lazy-load*/

window.onload = function() {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
};





/*Toggle Menu*/
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


/*
script for dynamic-images
==========================
*/


function initImageSequence(imgElementId, imageArray, interval = 5000, transitionDelay = 750) {
    const imgElement = document.getElementById(imgElementId);
    let currentIndex = 0;

    function changeImage() {
        imgElement.classList.remove('visible');
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % imageArray.length;
            imgElement.src = imageArray[currentIndex];
            imgElement.classList.add('visible');
        }, transitionDelay); // The timeout should match the CSS transition duration
    }

    imgElement.addEventListener('load', function () {
        imgElement.classList.add('visible');
    });

    // Change image at the specified interval
    setInterval(changeImage, interval);
}

const images1 = ['./media/noe.prof2.png', './media/noe.prof3.png'];
initImageSequence('dynamic-image1', images1);
initImageSequence('dynamic-image2', images1, 8000);
initImageSequence('dynamic-image3', images1, 3000);
initImageSequence('dynamic-image4', images1, 6000);



//dynamic header background

document.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 20) { // Change 50 to the scroll threshold you want
      header.style.backgroundColor = 'hsl(300, 51%, 19%)';
    } else {
      header.style.backgroundColor = '';
    }
  });
