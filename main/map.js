var newpos = function(pos){
	var lat = pos.coords.latitude,
		long = pos.coords.longitude;
	document.getElementById('map').setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150787.30097213035!2d' + lat + '!3d' + long + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795f1955555555%3A0x5d2010f8e6ce97ff!2sPureGym!5e0!3m2!1sen!2suk!4v1651773479981!5m2!1sen!2suk')
}

document.getElementById('btn').onclick = function(){
	navigator.geolocation.getCurrentPosition(newpos);
	return false;
}