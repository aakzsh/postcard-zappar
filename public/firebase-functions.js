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
        const front = document.getElementById('front');
        const top = document.getElementById('top');
        const right = document.getElementById('right');
        const left = document.getElementById('left');

        bigBuckBunnyVideo.src = videourl
        front.src = value['image-urls'][0]
        top.src = value['image-urls'][1]
        left.src = value['image-urls'][2]
        right.src = value['image-urls'][3]

    });
}

document.addEventListener('DOMContentLoaded',() => {
    x();
});


