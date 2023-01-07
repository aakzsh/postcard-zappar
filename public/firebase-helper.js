import firebaseConfig from '../variables.js'
// import "firebase/storage";

firebase.initializeApp(firebaseConfig);


// console.log(firebase)
var messagesRef = firebase.firestore().collection("postcards");
// .ref('Collected Data');

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email) {
  // var newMessageRef = messagesRef.push();
  messagesRef.add({
    name: name,
    email: email,
  });
}

export async function getData(code) {
  // var newMessageRef = messagesRef.push();
  var docRef = messagesRef.doc(code);

  return docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return "no such doc"
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      return "error";
    });
}




export async function uploadFiles(file, name){
  console.log("check", firebase.storage() )
    var storageRef = firebase.storage().ref();
var imagesRef = storageRef.child('images/'+name);

imagesRef.put(file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });

}


export async function uploadVidFiles(file, name){
  console.log("check", firebase.storage() )
    var storageRef = firebase.storage().ref();
var imagesRef = storageRef.child('videos/'+name);

imagesRef.put(file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });

}



export async function putData(code, note) {
  // var newMessageRef = messagesRef.push();
  var docRef = messagesRef.doc(code);
const base = "https://storage.googleapis.com/postcard-zappar.appspot.com/"
  return docRef
    .set({
"image-urls": [base + "images/"+code+"1.jpg", base + "images/"+code+"2.jpg", base + "images/"+code+"3.jpg", base + "images/"+code+"4.jpg"],
"note": note,
"video-url": base + "videos/"+code+"vid.mp4"
    })
    .then((val) => {
     console.log(val)
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      return "error";
    });
}