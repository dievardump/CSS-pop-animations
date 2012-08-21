(function () {
	'use strict';
	var container = document.getElementById('container');
	if (container) {
		document.getElementById('toggle').addEventListener('click', function (event) {
			container.className = '';
			setTimeout(function () { container.className = 'animate'; }, 300);
		}, false);
	}
}());