var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
      data1 += chunk;
      });

request.on('end', function() {
var name = querystring.parse(data1)["name"];
console.log(name);
var email = querystring.parse(data1)["email"];
console.log(email);
var phoneno = querystring.parse(data1)["Phone"];
console.log(phoneno);
var dob = querystring.parse(data1)["date"];
console.log(dob);
var spass = querystring.parse(data1)["password"];
console.log(spass);
var cpass = querystring.parse(data1)["password1"];
console.log(cpass);
var gender = querystring.parse(data1)["gender"];
console.log(gender);


if (request.url === '/login') {
module.authenticateUser( email,spass ,response);
      } 
else if (request.url === '/save') {
module.saveUser(name, email,phoneno,dob,email,spass,cpass,gender, response);
      } 
});

}).listen(3000);
console.log("Server started");