$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
});


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCUX2NkUNPgAgexnwCRn3WUg4LNZmzmMHg",
    authDomain: "contact-form-e01ae.firebaseapp.com",
    databaseURL: "https://contact-form-e01ae.firebaseio.com",
    projectId: "contact-form-e01ae",
    storageBucket: "contact-form-e01ae.appspot.com",
    messagingSenderId: "381661788765",
    appId: "1:381661788765:web:65835a731fcbeaa225abb4",
    measurementId: "G-0XK2822VHL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//refrence message collection

var massegesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactform').addEventListener('submit',submitform);
//submit for,
function submitform(e){
    e.preventDefault();

//Get values
var name = getInputVal('name');
var email = getInputVal('email');
var services = getInputVal('services');
var subject = getInputVal('subject');

//save massege
saveMessage(name, email, services,subject);
var newMessageRef = messagesRef.push();
}
 
//show alert
document.querySelector('.alert').getElementsByClassName.display = 'block';

//hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').getElementsByClassName.display = 'none';
},3000);

document.getElementsByid
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).nodeValue;
}


function saveMessage(name, email, services,subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        services: services,
        subject: subject
    });
}