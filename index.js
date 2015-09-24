var express = require('express');
var app = express();

//app.get('/',function(req,res){
//	res.send("Hello world Johnny.");
//});

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req,res){
	console.log("I received a GET request");

	person1 = {
			name: 'tim',
			email: 'tim@gmail.com',
			number: '(111) 111-1111'
		};

		person2 = {
			name: 'jon',
			email: 'john@gmail.com',
			number: '(222) 213-1111'
		};

		person3 = {
			name: 'mickey',
			email: 'mick@gmail.com',
			number: '(999) 111-1181'
		};

	var contactlist = [person1,person2,person3];
	res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000!");