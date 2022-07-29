$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('nav .nav__links li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
        $('nav .nav__links').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('nav .nav__links').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

function gotowhatsapp() {
            
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;

    var url = "https://wa.me/212676866794?text=" 
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email  + "%0a"
    + "Service: " + service; 

    window.open(url, '_blank').focus();
}

var typed = new Typed(".auto-type", {
    strings: ["All MTK in one Click", "Reset FRP", "Bypass MI Account", "Format + User Data", "Open Browser MTP", "Safe Format", "Unlock & Relock BootLoader", "OPPO & REALME Safe format", "Read Scatter", "Format Qualcomm", "VIVO Remove Demo", "Remove Huawei ID 'Oem'", "Backup & Erase NVData", "Samsung FRP (MTP/ADB)"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color => {

    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
    });
});
document.querySelector('.mode').onclick = () => {
    document.querySelector('body').classList.toggle('dark-theme');
    document.querySelector('.light').classList.toggle('show');
    document.querySelector('.dark').classList.toggle('hidden');
};

let tabs = document.querySelectorAll(".shuffle li");
let tabsArray = Array.from(tabs);

let divs = document.querySelectorAll(".container-cards > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});