function validateEmail()
{
  var em1 = document.getElementById("confirm-mail-js").value;
  var em2 = document.getElementById("confirm-mail-js2").value;
  var name = document.getElementById("namejs").value;

  if (em1===em2) {
    document.write("Congratulations "+name+" the account was created succesfully")
  }

  else {
    // document.write("Failed to create account");
    document.getElementById("confirm-mail-js2").style.borderColor="red";
    document.getElementById("Fails").style.display = 'block';
  }
}


var dayFor = document.getElementById("day-bday-js");

for (var i = 1; i <=31; i++) {
  var day = document.createElement("option");
    day.text = i;
    dayFor.appendChild(day);

}


var months = ["January", "February", "March", "April", "May", "Juny", "July", "August", "September", "October", "November", "December"];
var monthFor = document.getElementById("month-bday-js");

for (var i = 0; i < months.length; i++) {
  var month = document.createElement("option");
  month.text = months[i];
  monthFor.appendChild(month);
}

var yearFor = document.getElementById("year-bday-js")
var end = 2017;
for (var i = 1900; i <=end ; i++) {
  var year = document.createElement("option");
  year.text = i;
  yearFor.appendChild(year);
}
