import { putData, uploadFiles, uploadVidFiles } from "./firebase-helper.js";


function uploadImg(file, name) {
    console.log("Called")
    uploadFiles(file, name).then((value) => {
        console.log(value)

    });
}

function uploadVid(file, name) {
    console.log("Called")
    uploadVidFiles(file, name).then((value) => {
        console.log(value)

    });
}



document.getElementById('nxt'). addEventListener('click',() => {
    let code = (Math.random() + 1).toString(36).substring(7);
console.log(code);
    uploadImg(document.getElementById('img1').files[0], code+'1.jpg');
    uploadImg(document.getElementById('img2').files[0], code+'2.jpg');
    uploadImg(document.getElementById('img3').files[0], code+'3.jpg');
    uploadImg(document.getElementById('img4').files[0], code+'4.jpg');
    uploadVid(document.getElementById('vid').files[0], code+'vid.mp4');

    putData(code, document.getElementById("notex").value)

    localStorage.setItem("code", code);

    window.location.href='create2.html'
});
