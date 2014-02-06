var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var newFriend = {};
	newFriend.name = req.query.name;
	newFriend.description = req.query.description;
	newFriend.imageURL = "http://lorempixel.com/500/500/people";
	console.log(newFriend);
	data["friends"].push(newFriend);
	res.render('add');

 }