var lightBox = document.getElementById('myLightBox');
var feedBack = document.getElementById('myFeedBack');

function openLightBox() {
    lightBox.style.display = "flex";
    document.getElementById('myOverlay').style.display = "block";
}

window.onclick = (event)=>{
    if (event.target == lightBox||event.target == feedBack){
        lightBox.style.display = "none";
        feedBack.style.display = "none";
    }
}

function closeLightBox() {
    feedBack.style.display = "none";
}