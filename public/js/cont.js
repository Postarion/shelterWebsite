new Vue({
    el: '.dog-app',
    data: {
        formLightbox: false,
        showFeedback: true
    },
    methods: {
        closeFeedbackLightbox() {
            this.showFeedback = false;
        }
    },
    mounted() {
        const container = document.querySelector('.dog-app');
        this.formLightbox = container.getAttribute('data-lightbox') === 'true';
    }
});

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
