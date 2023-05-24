function validateform() {
        var name = document.getElementById('name');
        var phone = document.getElementById('phone');
        var password = document.getElementById('password');
        var password1 = document.getElementById('password1');
        var email = document.myform.email.value;
        var radio=document.myform.gender.value;

        if (name.value == null || name.value == "") {
                alert("Name can't be blank");
                return false;
        }
        if(email==""||email==null)
        {
                alert("enter the email")
                return false
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)===false) {
                alert("invalid email")
                return (false)
        }
       
        if (phone.value == null || phone.value == "") {
                alert("Enter phoneno");
                return false;
        }


        if (phone.length != "") {
                var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                if (regex.test(phone.value) === false) {
                        alert("Enter a valid 10 digit ");
                        return false;
                }
                
        }

        if (password.value == "" || password.value==null) {
                alert("Please enter your password");
                password.focus();
                return false;
        }

        if (password.value.length != "") {
                var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
                if (regex.test(password.value) === false) {
                        alert("Please enter a valid pwd");
                        return false;
                }
        }
        if (password1.value == "" || password1.value==null) {
                alert("confirm password");
                password1.focus();
                return false;
        }
        if (password.value != password1.value) {
                alert("Password mismatch");
                return false;
        }
        if(radio==null || radio=="")
        {
                alert("select the gender");
                return  false;
        }
}
function rese(){
        alert("Are you sure to reset");
        document.getElementById('reset').reset();
}
