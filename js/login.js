var config = {
  apiKey: "AIzaSyC9-7JjOJYylyeTJVD6Lu_YPzNj4Xrv9xM",
authDomain: "topten-b3848.firebaseapp.com",
projectId: "topten-b3848",
storageBucket: "topten-b3848.appspot.com",
messagingSenderId: "321124034797",
appId: "1:321124034797:web:1ddcc2f1a5b79bebd384e4",
measurementId: "G-FG2NFEPDTM"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    // document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      window.location.replace("admin.html");

    }

  } else {
    // No user is signed in.

    // document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  window.location.replace("index.html");
}
