import { getData } from "./firebase-helper.js";



function x() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams)
    const code = urlParams.get("code");
    console.log(code);
    console.log("Called")
    getData(code).then((value) => {
        console.log(value)
        const videourl = value['video-url']
        const bigBuckBunnyVideo = document.getElementById('bigBuckBunnyVideo');
        const front = document.getElementById('front');
        const top = document.getElementById('top');
        const right = document.getElementById('right');
        const left = document.getElementById('left');
        const note = document.getElementById('note');
        bigBuckBunnyVideo.src = videourl
        front.src = value['image-urls'][0]
        top.src = value['image-urls'][1]
        left.src = value['image-urls'][2]
        right.src = value['image-urls'][3]
        note.setAttribute('value', value['note'])

    });
}

document.addEventListener('DOMContentLoaded',() => {
    x();
});


