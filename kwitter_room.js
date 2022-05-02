
//ADD YOUR FIREBASE LINKS HERE
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
    function addRoom(){
        room_name = document.getElementById("room_name").value;    firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
        localStorage.setItem("room_name",room_name);
        window.location = "kwitter_page.html";
      }
                   
function addRoom(){
    room_name = document.getElementById("room_name").value;   
     firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
  }
                                                                                                               
    function getData() {firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names= childkey;                                         
      //Start code
         console.log("Room Name - "+ Room_names);                    
          row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+= row;                  
         //End code
      });});}
getData();
    

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}