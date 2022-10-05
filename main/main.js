window.sr = ScrollReveal();
			
sr.reveal('.showcase-left', {
	duration: 2000,
	origin:'top',
	distance:'300px'
});
			
sr.reveal('.showcase-right',{
	duration: 2000,
	origin:'right',
	distance:'300px'
});

sr.reveal('.info-right',{
	duration: 2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.info-left',{
	duration: 2000,
	origin:'right',
	distance:'300px'
});

/*Making sure password match*/
document.querySelector('.signup-btn').onclick = function(){
	var password = document.querySelector('#pw').value,
		confirmPassword = document.querySelector('#confirmpw').value;
		if (password == ""){
			alert("Field cannot be empty!");
		}
		else if (password != confirmPassword){
			alert("Password didn't match, try again.");
			return false
		}
		return true
}
