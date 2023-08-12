"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// ==========  Call class ==============
const headerEl = $(".header");
const navEl = $(".navbar");
const navLink = $$(".navbar__link");
const lineEl = $(".navbar__line");
const lineActive = $(".navbar__link.navbar__link--active");
const backToTopBtn = $(".back-to-top");
const navbarPc = $("#navbar-pc");
const navbarMobile = $("#navbar-mobile");

// ============ Start Copy Navigation from PC -> Mobile ===========
navbarMobile.innerHTML = navbarPc.innerHTML;
// ============ End Copy Navigation from PC -> Mobile ===========

// ============ Start Sticky Navigation ===========
function stickyNav(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        headerEl.classList.add("fixed");
    } else {
        headerEl.classList.remove("fixed");
    }
}

const headerObserve = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.9,
});

headerObserve.observe(headerEl);
// ============ End Sticky Navigation ===========

// ============ Start Scroll Smooth Link ===========
navEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("navbar__link")) {
        const id = e.target.getAttribute("href");
        $(id).scrollIntoView({ behavior: "smooth" });
    }
});
// ============ End Scroll Smooth Link ===========

// ============ Start Back to top =========
function calcBackToTop() {
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos >= 100) {
        backToTopBtn.style.display = "inline-block";
    } else {
        backToTopBtn.style.display = "none";
    }
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    backToTopBtn.style.background = `conic-gradient( #7264d6 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcBackToTop;
window.onload = calcBackToTop;
// ============ End Back to top ===========
// ============ Start Change Line Nav link ===========
function updateLinePosition(nav) {
    const offsetAdjustment = 24;
    const style = window.getComputedStyle(nav);
    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);
    
    lineEl.style.left = nav.offsetLeft + offsetAdjustment + "px";
    lineEl.style.width = nav.offsetWidth - (paddingLeft + paddingRight) + "px";
}

navLink.forEach((t) => {
    t.onclick = () => {
        navLink.forEach((link) => {
            link.classList.remove("navbar__link--active");
        });
        t.classList.add("navbar__link--active");
        updateLinePosition(t);
    };
});
// ============ End Change Line Nav link =============

// ============== Start Slider Comment ===============
// ============== End Slider Comment =================

// ============== Start Slider BLog ===============
// ============== End Slider Blog =================
