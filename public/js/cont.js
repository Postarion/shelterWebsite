var lightBox = document.getElementById('myLightBox');
var feedBack = document.getElementById('myFeedBack');

function openLightBox() {
    lightBox.style.display = "flex";
    document.getElementById('myOverlay').style.display = "block";
}
//close lightbox when click outside of the box
window.onclick = (event)=>{
    if (event.target == lightBox||event.target == feedBack){
        lightBox.style.display = "none";
        feedBack.style.display = "none";
    }
}

function closeLightBox() {
    feedBack.style.display = "none";
}

//Open lightbox when errors shows in adopt inpyt sections
function slb(){
    let test3 = document.getElementById('slb').value;
    console.log(test3)
    showLightbox=test3;
    if (showLightbox){
        window.onload = openLightBox;
    }
}