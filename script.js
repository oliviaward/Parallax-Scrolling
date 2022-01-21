var doscroll = function(event){
    console.log(event)

}
document.addEventListener("DOMContentLoaded", (event) => { 
    window.addEventListener("scroll", () => {
        var scrollspeed = 0.2
        var element = document.getElementById("card")
        var boundingbox = element.getBoundingClientRect()
        element.style.transform = "translate3d(0, " + boundingbox.y * scrollspeed + "px, 0)";
    })
});




// boundingbox.y + boundingbox.height > 0 &&             //Is not above viewport
//  boundingbox.y < window.innerHeight &&         //Checks element is above the bottom of viewport
// (element.style.transform = "translate3d(0, " + boundingbox.y * scrollspeed + "px, 0)");
