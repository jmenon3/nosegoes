var firebaseref = firebase.database().ref();
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    firebaseref.child("Users").push().set(user.email);
  } else {
    aler("nahh");
  }
});
