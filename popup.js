$(function(){

	var signed_in = 0;
	var user_email;
	console.log("sads");
	chrome.storage.sync.get('username', function(user){
		if(user.username){
			// window.location.href = "loggedinpopup.html";
			console.log("i am here");
			user_email = user.username;
			signed_in = 1;
			$('#emailLabel')[0].innerHTML = "WELCOME " + user_email;
			var email_id = $('#hey1');
			var passwordLabel = $('#hey2');
			var password = $('#hey3');
			var repeatLabel = $('#repeatLabel');
			var repeatPassword = $('#repeatPassword');
			var checked = $('#checked');
			var p1 = $('#p1');
			if(email_id){
				email_id.remove();
			}
			if(passwordLabel){
				passwordLabel.remove();
			}
			if(password){
				password.remove();
			}
			if(repeatLabel){
				repeatLabel.remove();
			}
			if(repeatPassword){
				repeatPassword.remove();
			}
			if(checked){
				checked.remove();
			}
			if(p1){
				p1.remove();
			}	

			$('#signupbutton')[0].innerHTML = "To Dashboard!";
			$('#cancelbutton')[0].innerHTML = "Logout";
		}	
	});

	document.getElementById("signupbutton").addEventListener("click", function(){
		if(signed_in){
			console.log("to new Dashboard");
			window.open('maindashboard.html', '_blank');
		}
		else{
			console.log("here pls");
			var email = $("#email")[0].value;
			var password = $("#password")[0].value;
			var repeatpassword = $("#repeatPassword")[0].value;

			console.log(email);
			console.log(password);
			console.log(repeatPassword);

			chrome.storage.sync.set({"username":email}, function(){
				console.log("AREY YAHA YAHA PE")
				var notifOptions = {
	                        type: "basic",
	                        iconUrl: "icon48.png",
	                        title: "Account Registered!",
	                        message: "Yay, you have successfully signed up!!"
	                };
	            chrome.notifications.create('limitNotif', notifOptions);
	            window.location.href = "loggedinpopup.html";
	            // chrome.browserAction.setPopup("loggedinpopup.html");
			});

		}
	})

	document.getElementById("cancelbutton").addEventListener("click", function(){
		if(signed_in)
		{
			window.location.href = "popup.html";
			chrome.storage.sync.remove('username');
			signed_in = 0;
			
		}
		else{
			window.close();
		}
	})
})