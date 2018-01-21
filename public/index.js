firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser == null){
      window.location = 'login.html'
    }
});

var firebaseref = firebase.database().ref();
var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    firebaseref.child("Users").once('value', function(snapshot) {
  if (!snapshot.hasChild(user.uid)) {
<<<<<<< HEAD
    firebaseref.child("Users").child(user.uid).child("Email").set(user.email);
    firebaseref.child("Users").child(user.uid).child("Name").set(user.displayName);
    firebaseref.child("Users").child(user.uid).child("Houses").set("None");
    firebaseref.child("Users").child(user.uid).child("Points").set("1");
=======
    firebaseref.child("Users").child(user.uid).child("Email").set(user.email); 
    firebaseref.child("Users").child(user.uid).child("Name").set(user.displayName);    
    firebaseref.child("Users").child(user.uid).child("Houses").set("None");    
    firebaseref.child("Users").child(user.uid).child("Points").set("0");
>>>>>>> 1304e0f0e27ecd1994eb0d1d869ee0dbf9800dd9
  }
});


  } else {
    // alert("nahh");
    window.location = 'login.html'
  }
});
