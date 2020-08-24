function getAkanName(){
    var days = ["sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adowoa"."Abenaa","Akua","Yaa"."Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").Value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheweek = dateOfBirth.getDay();
     if(myBirthday === ""){
         document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"class
         $('#message').addClass("animated shake");
}