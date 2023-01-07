import { getData } from "./firebase-helper.js";
console.log("hehe");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = 'demoid';
console.log(code);


function x() {
    console.log("Called")
    getData(code).then((value) => {
        console.log(value)
        const videourl = value['video-url']
        const bigBuckBunnyVideo = document.getElementById('bigBuckBunnyVideo');
    
        bigBuckBunnyVideo.src = 'https://cdn.aframe.io/360-video-boilerplate/video/city.mp4'
    });
}

const placementUI = document.getElementById("zappar-placement-ui");

placementUI.addEventListener('click', () => {
    x();
})

