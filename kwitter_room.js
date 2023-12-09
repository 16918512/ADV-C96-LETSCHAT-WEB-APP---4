
const firebaseConfig = {
      apiKey: "AIzaSyCC4PCEHtPMLyBgeJX6uc0haOW1ztUHMuE",
      authDomain: "adv-c94-4e449.firebaseapp.com",
      databaseURL: "https://adv-c94-4e449-default-rtdb.firebaseio.com",
      projectId: "adv-c94-4e449",
      storageBucket: "adv-c94-4e449.appspot.com",
      messagingSenderId: "735036016552",
      appId: "1:735036016552:web:dd9aae808cebc44b253f9d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome   "+ user_name;



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();


function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

function addRoom() {
      //Get the room name from the input field
      var room_name = document.getElementById("room_name").input.value;
    
      //Add the room name to localStorage and firebase database
      localStorage.setItem("room_name", room_name); //Store the room name in localStorage
      firebase.database().ref("/").child(room_name).update({ //Create a child node with the room name in the firebase database
        purpose: "adding room name" //Add a dummy value to the node
      });
    
      //Redirect to kwitter_page.html
      window.location = "kwitter_page.html"; 
}

function redirectToRoomName(name) {
      //Store the room name in localStorage
      localStorage.setItem("room_name", name); //Store the room name in localStorage
    
      //Redirect to kwitter_page.html
      window.location = "kwitter_page.html"; //Navigate to the kwitter page
}