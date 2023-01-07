import firebaseConfig from '../variables.js'

firebase.initializeApp(firebaseConfig);

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



async function uploadFiles(file){
    var storageRef = firebase.storage().ref();
var imagesRef = storageRef.child('images/mountains.jpg');

imagesRef.put(file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });

}
