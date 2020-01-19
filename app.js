const express = require('express');
var firebase = require("firebase/app");
require("firebase/firestore");						
const app = express();
var cors = require('cors')
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

let ID = '_' + Math.random().toString(36).substr(2, 9);
let db = firebase.firestore();



app.use(cors())
let userArray = [];
let allusers = db.collection("users");

function matchUser(newUser){
	var matching_person;
	var non_matching_person;
	var max = -1;
	var min = 101;
	for(i = 0; i < userArray.length; i++){
		var match_number = 100;
		if(newUser.Email != userArray[i].Email) {
			for(j = 0; j < newUser.Answers.length; j++) {
				if(j==0 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 3;
				}
				else if(j==1 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 4;
				}
				else if(j==2 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 6;
				}
				else if(j==3 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 2;
				}
				else if(j==4 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 8;
				}
				else if(j==5 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 2;
				}
				else if(j==6 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 8;
				}
				else if(j==7 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 10;
				}
				else if(j==8 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 3;
				}
				else if(j==9 && userArray[i].Answers[j] != newUser.Answers[j]){
					match_number -= 3;
				}
			}			
			if(match_number > max){
				max = match_number;
				matching_person = userArray[i];
			}

			if(match_number < min){
				min = match_number;
				non_matching_person = userArray[i];
			}
		}
	}
	db.collection('users').doc(ID).set(newUser);	
	// console.log(newUser.Name + " matches most with " + matching_person.Name);
	// console.log(matching_person)
	// console.log(newUser.Name + " matches least with " + non_matching_person.Name);
	// console.log(non_matching_person)
	return {
		soul_mate_best_match: matching_person.Name,
		soul_mate_email: matching_person.Email,
		soul_mate_phone_number: matching_person.Phone_Number,
		opposites_attract_worst_match: non_matching_person.Name,
		opposites_attract_email: non_matching_person.Email,
		opposites_attract_phone_number: non_matching_person.Phone_Number
	}
}

allusers.onSnapshot(function(querySnapshot){
	userArray = [];
	querySnapshot.forEach(user => {
		userArray.push({...user.data(), id: user.id})
	})	
})

app.get('/', (req, res) => {
	
	let setDoc = db.collection('users').doc(ID).set(newUser);

	res.send(non_matching_person);
	res.send(matching_person);
});

app.get('/submit', (req, res) => {
	let userData = JSON.parse(req.query.data);
	let bestMatchedUser = matchUser(userData);

	res.send(bestMatchedUser);
});

app.listen(port, () => console.log('Example app listening on port ${port}!'))
