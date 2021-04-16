
var firebaseConfig = {
      apiKey: "AIzaSyBcQtS25RNoAtkTuRnGKPe-z56zl9m_hs8",
      authDomain: "kwitter-app-f528a.firebaseapp.com",
      databaseURL: "https://kwitter-app-f528a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-f528a",
      storageBucket: "kwitter-app-f528a.appspot.com",
      messagingSenderId: "1011551703490",
      appId: "1:1011551703490:web:7f052634591007d2ccc65b"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
