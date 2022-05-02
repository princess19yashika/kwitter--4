//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBtvaTpBKDqWtA5tAp0dw-N4DCZhzjwSbA",
      authDomain: "kwitter-a5965.firebaseapp.com",
      databaseURL: "https://kwitter-a5965-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5965",
      storageBucket: "kwitter-a5965.appspot.com",
      messagingSenderId: "702431963847",
      appId: "1:702431963847:web:2a19682cfa0e4db0aaace2",
      measurementId: "G-H2WL63EN3P"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg= document.getAnimations("msg").value;
      firebase.database().ref(room_name).push
      ({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

