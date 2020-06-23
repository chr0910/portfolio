
// <!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD34KRlNTUNVcqA8bSZLzmAT5RXzVQkw8w",
    authDomain: "loginpractice-1d835.firebaseapp.com",
    databaseURL: "https://loginpractice-1d835.firebaseio.com",
    projectId: "loginpractice-1d835",
    storageBucket: "loginpractice-1d835.appspot.com",
    messagingSenderId: "1097435679543",
    appId: "1:1097435679543:web:72ef4af967bd1b5b57e8b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const signUpBtn = document.getElementById("signUpBtn")
const signInBtn = document.getElementById("signInBtn")


function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed up Sucessfull");
}

function logIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Log In Sucessfull \n Welcome " + email.value);
    // take user to new page
}

function signOut(){
    auth.signOut();
    alert("You are not logged in anymore");
}

signUpBtn.addEventListener('click', (e) => {
    signUp();
})

signInBtn.addEventListener('click', (e) => {
    logIn();
})

auth.onAuthStateChanged(function(user){
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if(user != null){
        name = user.displayName;
        email = user.email
        photoUrl = user.photoUrl;
        emailVerified = user.emailVerified;
        uid = user.uid;
        alert("Active User " + email);
        //is signed in
    }
    else{
        alert("No Active User");
        //no user signed in
        //redirect to login page
    }
});