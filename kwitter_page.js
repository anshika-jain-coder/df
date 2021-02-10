//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBgbKDCW8eB6gGPkeC5Zon3X6De9YKdY0s",
      authDomain: "class-7d330.firebaseapp.com",
      databaseURL: "https://class-7d330-default-rtdb.firebaseio.com",
      projectId: "class-7d330",
      storageBucket: "class-7d330.appspot.com",
      messagingSenderId: "38480027039",
      appId: "1:38480027039:web:2a5c045eef81ed7ffcb1aa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

function send(){
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
      } });  }); }
getData();
