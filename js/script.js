window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.background = "white";
        document.getElementById("header").style.height = "80px";
        $('.logo').css('padding', '20px');
        $('.links').css('padding', '31px 40px');
    } else {
        document.getElementById("header").style.background = "none";
        document.getElementById("header").style.height = "120px";
        $('.logo').css('padding', '40px');
        $('.links').css('padding', '51px');
    }
}
function getX(event) //left position
{
    if(!event.pageX)
    {
        return event.clientX;
    }
    else
    {
        return event.pageX - (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
}

function getY(event) //top position
{
    if(event.pageY)
    {
        return event.pageY - (document.body.scrollTop || document.documentElement.scrollTop);
    }
    else
    {
        return event.clientY;
    }
}
document.addEventListener("mousemove", e => {
    document.getElementById('cursor').style.top = getY(event) + "px";
    document.getElementById('cursor').style.left = getX(event) + "px";
})