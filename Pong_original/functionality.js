var helper = {
	getRandomNumber: function(from, to) {
		return from + Math.round( Math.random() * (to-from) );
	},
	$: function(element) {
		return document.getElementById(element);
	}
};