firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser == null){
      window.location = 'login.html'
    }
});

var firebaseref = firebase.database().ref();
var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
<<<<<<< Updated upstream
  if (user) {
    firebaseref.child("Users").once('value', function(snapshot) {
  if (!snapshot.hasChild(user.uid)) {
    firebaseref.child("Users").child(user.uid).child("Email").set(user.email);
    firebaseref.child("Users").child(user.uid).child("Name").set(user.displayName);
    firebaseref.child("Users").child(user.uid).child("Points").set("0"); 
    
    window.location = 'houses.html'
    
  }
}); 
  firebaseref.child("Users").child("Houses").once('value', function(snapshot) {
      //alert(!snapshot.hasChild("Houses"));
  if (!snapshot.hasChild("Houses")) {
    window.location = 'houses.html'
  }
  else{
    window.location = 'index.html'
    break;
  }
}); 
    
=======
   if (user) {
      firebaseref.child("Users").once('value', function(snapshot) {
         if (!snapshot.hasChild(user.uid)) {
            firebaseref.child("Users").child(user.uid).child("Email").set(user.email);
            firebaseref.child("Users").child(user.uid).child("Name").set(user.displayName);
            firebaseref.child("Users").child(user.uid).child("Houses").set("None");
            firebaseref.child("Users").child(user.uid).child("Points").set("0");
         }
      });

      firebaseref.child("Users").child(user.uid).once('value', function(snapshot) {
         if (!snapshot.hasChild("Associated-Houses")){
            console.log("I'm in here!!");
            // window.location = "houses.html";
         }
      });
>>>>>>> Stashed changes

  } else {
    // alert("nahh");
    window.location = 'login.html';
  }
});
