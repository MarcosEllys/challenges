const deg2rad = (deg) => { return deg * (Math.PI / 180); }

const distanceFromLatLonInKm = (position1, position2) => {
	R = 6371,
		dLat = deg2rad(position2.lat - position1.lat),
		dLng = deg2rad(position2.lng - position1.lng),
		a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
		+ Math.cos(deg2rad(position1.lat))
		* Math.cos(deg2rad(position1.lat))
		* Math.sin(dLng / 2) * Math.sin(dLng / 2),
		c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return ((R * c * 1000).toFixed());
}

distanceFromLatLonInKm(
	{ lat: -7.23395522481206, lng: -35.902233807488 },
	{ lat: -7.23384322139564, lng: -35.9022139631974 }
);
