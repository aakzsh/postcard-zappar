import { uploadFiles } from "./firebase-helper.js";


function uploadImg(file) {
    console.log("Called")
    uploadFiles(file).then((value) => {
        console.log(value)

    });
}



document.getElementById('nxt'). addEventListener('click',() => {
    uploadImg(document.getElementById('img1').files[0]);
});
