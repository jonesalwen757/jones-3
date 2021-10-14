//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_width_tag = "<h4>"+name+ "<img class='user_tick' src='tick.png'><h4/>";
        message_width_tag ="<h4 class='message_h4'"+ message +"<h4/>";
        like_button ="<button class='btn btn-warning id="+firebase_message_id 
//End code
   } });  }); }
getData();
