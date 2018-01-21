var firebaseref = firebase.database().ref();
var user = firebase.auth().currentUser;

firebaseref.child("Users").push().set(user.email);