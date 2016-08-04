module.exports = function() {

	var firebase = require('firebase');

	var config = {
	    apiKey: "AIzaSyCOJZqfwzZ6GwEYBbRNyyIy7Z9vEsTx4ME",
	    authDomain: "fire-test-e2171.firebaseapp.com",
	    databaseURL: "https://fire-test-e2171.firebaseio.com",
	    storageBucket: "fire-test-e2171.appspot.com",
  	};

  	var firebaseRef = firebase.initializeApp(config);

	var controllers = {};

	controllers.index = function (req, res) {

		console.log(firebaseRef)
		console.log(firebaseRef.storage())

		var storage = firebaseRef.storage();


		return;

		var storageRef = firebaseRef.storage().ref();
		var imagesRef = storageRef.child('images');


		// Create a reference to the file we want to download
		var starsRef = storageRef.child('images/stars.jpg');

		// Get the download URL
		starsRef.getDownloadURL().then(function(url) {
		  // Insert url into an <img> tag to "download"
		}).catch(function(error) {
		  switch (error.code) {
		    case 'storage/object_not_found':
		      // File doesn't exist
		      break;

		    case 'storage/unauthorized':
		      // User doesn't have permission to access the object
		      break;

		    case 'storage/canceled':
		      // User canceled the upload
		      break;

		    case 'storage/unknown':
		      // Unknown error occurred, inspect the server response
		      break;
		  }
		});		
	}	

	return controllers;
}