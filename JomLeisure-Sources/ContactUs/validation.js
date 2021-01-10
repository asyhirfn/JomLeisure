const First_Name = document.getElementById("fname");
const Last_Name = document.getElementById("lname");
const Mail = document.getElementById("email");
const Message = document.getElementById("subject");

const submit = document.getElementById("submit");

submit.addEventListener('click', function(){
  if(formValidation(First_Name, Last_Name, Mail, Message) == false) {

  }
  else {
    alert("Thank you for your input!");
  }
});

function formValidation(First_Name, Last_Name, Mail, Message){
 var fname = First_Name.value;
 var lname = Last_Name.value;
 var message = Message.value;
 var mail = Mail.value.toString();

  if (fname == "" || lname == "") {
    alert("Name must be filled out.");
    return false;
  }

  else if(ValidateEmail(mail) == false) {
      alert("You have entered an invalid email address!");
	    return false;
  }
  else if( message == "") {
    alert("You have not written any inquiries.");
    return false;
  }

  return true;
}

function ValidateEmail(mail)
{
 if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(mail))
  {
    return 1;
  }
  return 0;
}
