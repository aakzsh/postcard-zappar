import { putData, uploadFiles, uploadVidFiles } from "./firebase-helper.js";


function uploadImg(file, name) {
    console.log("Called")
    return uploadFiles(file, name).then((value) => {
        console.log(value)

    });
}

function uploadVid(file, name) {
    console.log("Called")
    return uploadVidFiles(file, name).then((value) => {
        console.log(value)

    });
}

function sizeCalc(file){
    return file.size / 1024 / 1024;
}


document.getElementById('nxt'). addEventListener('click',() => {
    let code = (Math.random() + 1).toString(36).substring(7);
console.log(code);

const img1 = document.getElementById('img1').files[0]
const img2 = document.getElementById('img2').files[0]
const img3 = document.getElementById('img3').files[0]
const img4 = document.getElementById('img4').files[0]
const vid = document.getElementById('vid').files[0]

// if(sizeCalc(img1)+sizeCalc(img2)+sizeCalc(img3)+sizeCalc(img4)>3 || sizeCalc(vid)>5){
if(sizeCalc(img1)>3){
    alert("File size too large!! Combined images size shouldn't exceed 3 MBs and video size shouldn't exceed 5 MBs");
}
else{
    uploadImg(document.getElementById('img1').files[0], code+'1.jpg').then(()=> {
        uploadImg(document.getElementById('img2').files[0], code+'2.jpg').then(()=> {
            uploadImg(document.getElementById('img3').files[0], code+'3.jpg').then(()=> {
                uploadImg(document.getElementById('img4').files[0], code+'4.jpg').then(()=> {
                    uploadVid(document.getElementById('vid').files[0], code+'vid.mp4').then(()=> {
                        putData(code, document.getElementById("notex").value).then(()=> {
                            localStorage.setItem("code", code);

                            window.location.href='create2.html'
                        })
                    })
                })
            })
        })    
    })

    
 

   
}

});
