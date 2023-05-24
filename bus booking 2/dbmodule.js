var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(email,spass, response) {
db.users.find({ "email": email ,"password":spass},
	function(err, users) 
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            } 
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            } 
		else {
		response.write("Authorized user");
		response.end();
            }
        });
}

exports.saveUser = function(username, email,phoneno,dob,email,spass,cpass,gender, response) {
console.log('Saving user to mongo');
db.users.insert({ "username": username, "email": email,"phone":phoneno,"date":dob,"password":spass,"passwor1":cpass,"gender":gender  },
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
         });
}