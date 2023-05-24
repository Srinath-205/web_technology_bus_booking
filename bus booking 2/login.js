function validateform()
{
var password = document.getElementById('password');
var email = document.myform.email.value;
if(email==""||email==null)
        {
                alert("enter the email")
                return false
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)===false) {
                alert("invalid email")
                return (false)
        }

if (password.value == "" || password.value==null) {
    alert("Please enter your password");
    password.focus();
    return false;
}
}