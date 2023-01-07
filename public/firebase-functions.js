import { getData } from "./firebase-helper.js";
console.log("hehe");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// const code = urlParams['code'];
const code = "demoid"
console.log(code);


function x() {
    console.log("Called")
    getData(code).then((value) => {
        console.log(value)
        const videourl = value['video-url']
        const bigBuckBunnyVideo = document.getElementById('bigBuckBunnyVideo');
    
        bigBuckBunnyVideo.src = videourl

    });
}

const placementUI = document.getElementById("zappar-placement-ui");

placementUI.addEventListener('click', () => {
    x();
})

document.addEventListener('DOMContentLoaded',() => {
    x();
});


