var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.1;
var left;

function selectItem(e) {
    if (e.target.classList.contains('active')) return;

    featured.style.backgroundImage = e.target.style.backgroundImage;

    for (var i = 0; i < galleryItems.length; i++) {
        if (galleryItems[i].classList.contains('active'))
            galleryItems[i].classList.remove('active');
    }

    e.target.classList.add('active');
}

function galleryWrapLeft() {
    var first = gallery.children[0];
    gallery.removeChild(first);
    gallery.style.left = -itemWidth + '%';
    gallery.appendChild(first);
    gallery.style.left = '0%';
}

function galleryWrapRight() {
    var last = gallery.children[gallery.children.length - 1];
    gallery.removeChild(last);
    gallery.insertBefore(last, gallery.children[0]);
    gallery.style.left = '-23%';
}

function moveLeft() {
    left = left || 0;

    leftInterval = setInterval(function () {
        gallery.style.left = left + '%';

        if (left > -itemWidth) {
            left -= scrollRate;
        } else {
            left = 0;
            galleryWrapLeft();
        }
    }, 1);
}

function moveRight() {
    //Make sure there is element to the leftd
    if (left > -itemWidth && left < 0) {
        left = left - itemWidth;

        var last = gallery.children[gallery.children.length - 1];
        gallery.removeChild(last);
        gallery.style.left = left + '%';
        gallery.insertBefore(last, gallery.children[0]);
    }

    left = left || 0;

    leftInterval = setInterval(function () {
        gallery.style.left = left + '%';

        if (left < 0) {
            left += scrollRate;
        } else {
            left = -itemWidth;
            galleryWrapRight();
        }
    }, 1);
}

function stopMovement() {
    clearInterval(leftInterval);
    clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
    var images = [
        '/imagen/galeria/36.jpeg',
        '/imagen/galeria/37.jpeg',
        '/imagen/galeria/38.jpeg',
        '/imagen/galeria/30.jpeg',
        '/imagen/galeria/31.jpeg',
        '/imagen/galeria/32.jpeg',
        '/imagen/galeria/33.jpeg',
        '/imagen/galeria/34.jpeg',
        '/imagen/galeria/35.jpeg',
        '/imagen/galeria/1.jpg',
        '/imagen/galeria/2.jpg',
        '/imagen/galeria/3.jpg',
        '/imagen/galeria/5.jpg',
        '/imagen/galeria/6.jpg',
        '/imagen/galeria/7.jpg',
        '/imagen/galeria/8.jpg',
        '/imagen/galeria/9.jpg',
        '/imagen/galeria/10.jpg',
        '/imagen/galeria/11.jpg',
        '/imagen/galeria/12.jpg',
        '/imagen/galeria/13.jpg',
        '/imagen/galeria/14.jpg',
        '/imagen/galeria/15.jpg',
        '/imagen/galeria/16.jpg',
        '/imagen/galeria/17.jpg',
        '/imagen/galeria/18.jpg',
        '/imagen/galeria/19.jpg',
        '/imagen/galeria/20.jpg',
        '/imagen/galeria/21.jpg',
        '/imagen/galeria/22.jpg',
        '/imagen/galeria/23.jpg',
        '/imagen/galeria/24.jpg',
        '/imagen/galeria/25.jpg',
        '/imagen/galeria/26.jpg',
        '/imagen/galeria/27.jpeg',
        '/imagen/galeria/28.jpeg',
        '/imagen/galeria/29.jpeg',
        
    ];

    //Set Initial Featured Image
    featured.style.backgroundImage = 'url(' + images[0] + ')';

    //Set Images for Gallery and Add Event Listeners
    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
        galleryItems[i].addEventListener('click', selectItem);
    }
})();