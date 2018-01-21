var firebaseref = firebase.database().ref();
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
firebaseref.child("Users").child(user.uid).child("Houses").set("Homework");    
    
  } else {
    alert("nahh");
  }
});