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

/*dynamic-image1*/
const imgElement1 = document.getElementById('dynamic-image1');
const images1 = ['./media/noe.prof2.png', './media/noe.prof3.png'];

let i = 0;

function changeImage1() {
    imgElement1.classList.remove('visible');
    setTimeout(() => {
        i = (i + 1) % images1.length;
        imgElement1.src = images1[i];
        imgElement1.classList.add('visible');
    }, 750); // The timeout should match the CSS transition duration
}

imgElement1.addEventListener('load', function () {
    imgElement1.classList.add('visible');
});

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage1, 5000);

/*dynamic-image2*/
const imgElement2 = document.getElementById('dynamic-image2');
const images2 = ['./media/noe.prof2.png', './media/noe.prof3.png'];

let i2 = 0;

function changeImage2() {
    imgElement2.classList.remove('visible');
    setTimeout(() => {
        i2 = (i2 + 1) % images2.length;
        imgElement2.src = images2[i2];
        imgElement2.classList.add('visible');
    }, 750); // The timeout should match the CSS transition duration
}

imgElement2.addEventListener('load', function () {
    imgElement2.classList.add('visible');
});

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage2, 6000);

/*dynamic-image3*/
const imgElement3 = document.getElementById('dynamic-image3');
const images3 = ['./media/noe.prof2.png', './media/noe.prof3.png'];

let i3 = 0;

function changeImage3() {
    imgElement3.classList.remove('visible');
    setTimeout(() => {
        i3 = (i3 + 1) % images3.length;
        imgElement3.src = images3[i3];
        imgElement3.classList.add('visible');
    }, 750); // The timeout should match the CSS transition duration
}

imgElement3.addEventListener('load', function () {
    imgElement3.classList.add('visible');
});

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage3, 8000);

/*dynamic-image4*/
const imgElement4 = document.getElementById('dynamic-image4');
const images4 = ['./media/noe.prof2.png', './media/noe.prof3.png'];

let i4 = 0;

function changeImage4() {
    imgElement4.classList.remove('visible');
    setTimeout(() => {
        i4 = (i4 + 1) % images4.length;
        imgElement4.src = images4[i4];
        imgElement4.classList.add('visible');
    }, 750); // The timeout should match the CSS transition duration
}

imgElement4.addEventListener('load', function () {
    imgElement4.classList.add('visible');
});

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage4, 7000);
