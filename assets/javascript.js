$(document).ready(function () {

  console.log("javascript loaded!")

  console.log(firebase);
  var firebaseConfig = {
    apiKey: "AIzaSyD_y8T7JQwWOiJl6IKjqONc38NCSZsyxjo",
    authDomain: "project1-d0975.firebaseapp.com",
    databaseURL: "https://project1-d0975.firebaseio.com",
    projectId: "project1-d0975",
    storageBucket: "",
    messagingSenderId: "1071282302812",
    appId: "1:1071282302812:web:b82c38f60e24a6ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var name = "";
  var email = "";
  var message = "";
  let db = firebase.database();

  var instance = $("#contactForm").parsley();

  $("#addEmail").on("click", function (e) {
    e.preventDefault();

    name = $("#nameInput").val().trim();
    email = $("#emailInput").val().trim();
    message = $("#messageInput").val().trim();

    console.log(name)
    console.log(email)
    console.log(message)

    if (instance.isValid()) {
      $("#contactForm").css("background-color", "green");

      db.ref().push({
        name: name,
        email: email,
        message: message
      });

      // Clear form
      $("#nameInput").val("");
      $("#emailInput").val("");
      $("#messageInput").val("");
    }
    else {
      $("#contactForm").css("background-color", "red");
    }
  });

})
