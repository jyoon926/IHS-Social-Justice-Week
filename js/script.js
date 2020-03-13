window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("top").style.opacity = "1";
    } else {
        document.getElementById("top").style.opacity = "0";
    }
}
