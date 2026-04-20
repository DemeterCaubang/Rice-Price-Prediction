//Popup window to test if javascript file was linked to HTML file

function sayHello() {

  var Digital=new Date()
  var hours=Digital.getHours()

if (hours>=1&&hours<=11)
//GREETING MESSAGE FOR MORNING
				window.alert("Good Morning! Welcome");
			else if (hours>=12&&hours<=17)
				//GREETING MESSAGE FOR AFTERNOON
				window.alert("Good Afternoon! Welcome");
			else 
				//GREETING MESSAGE FOR EVENING
				window.alert("Good Evening! Welcome");
}

sayHello();