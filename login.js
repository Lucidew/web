function validate()
{
var username=document.getElementById("username").value 
var password=document.getElementById("password").value 

if(username=="admin"&& password=="user")
{
    alert("Bejelentkezés sikeres");
    return false;
}

else{
    alert("Bejelentkezés sikertelen.");
}
}