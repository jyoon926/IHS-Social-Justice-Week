window.onscroll = function() {
    scrollFunction()
};

//function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        //document.getElementById("header").style.background = "white";
        document.getElementById("header").style.height = "100px";
        document.getElementById("header").style.width = "100%";
    } else {
        //document.getElementById("header").style.background = "none";
        document.getElementById("header").style.height = "100px";
        document.getElementById("header").style.width = "50%";
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