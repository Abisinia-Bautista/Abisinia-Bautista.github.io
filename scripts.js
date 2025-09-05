//Mobile Nav Toggle
function mobileNavToggle() {
    var element = document.getElementById("navList");
    element.classList.toggle("active");
}

function mobileNavTogglegit() {
    var element = document.getElementById("navList");
    element.classList.remove("active");
}

//Change nav color on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".vfx-header").addClass("darkHeader");
    } else {
        $(".vfx-header").removeClass("darkHeader");
    }
});


