const express = require('express')
var firebase = require("firebase/app")
require("firebase/firestore");						
const app = express()
const port = 3000;

var firebaseConfig = {
    apiKey: "AIzaSyC9Ax7F5D-4y4-7eXEaQ3YL7iW_TBXyvHQ",
    authDomain: "b-zzr-8648e.firebaseapp.com",
    databaseURL: "https://b-zzr-8648e.firebaseio.com",
    projectId: "b-zzr-8648e",
    storageBucket: "b-zzr-8648e.appspot.com",
    messagingSenderId: "391094518019",
    appId: "1:391094518019:web:1d79ab26fad28b2df8a936",
    measurementId: "G-D7JD1F42R4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let userArray = [];
let db = firebase.firestore();
let allusers = db.collection("users");
allusers.onSnapshot(function(querySnapshot){
	userArray = [];
	querySnapshot.forEach(user => {
		userArray.push({...user.data(), id: user.id})
	})

	console.log("list of users:", userArray);
	console.log(user.answers.length);

})
var match_number = 4
var max = 0

for(i = 0; i < userArray.length; i++){
	for(j = 0; j < user.answers.length; j++)
		console.log(user.answers.length)
		console.log(userArray[i].answers[j])
		if(userArray[i].answers[j] != user.answers[j]){
			match_number -= 1;
		}
	if(match_number > max){
		max = match_number;
		var matching_person = userArray[i]

	}

}


	






app.get('/', (req, res) => {

	res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))