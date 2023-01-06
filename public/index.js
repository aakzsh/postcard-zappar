//         // Import the functions you need from the SDKs you need
//         import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//         import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyBhPRZMNlEpikSvkLZ_HfZzIKuVAlVTC_Y",
//     authDomain: "treebeeeeee.firebaseapp.com",
//     projectId: "treebeeeeee",
//     storageBucket: "treebeeeeee.appspot.com",
//     messagingSenderId: "128120053459",
//     appId: "1:128120053459:web:86a599b10bb92c9f2e7e26",
//     measurementId: "G-2LE3QH0YCR"
//   };

// // firebase.initializeApp(config);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = firebase.firestore();

// function addData() {
//     db.collection("users").add({
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//     })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
    
// }

// // export default addData;