(function (window, document) {
	'use strict';
	var links = document.getElementsByClassName('links')[0].getElementsByTagName('a'),
		targets = document.getElementById('target-container'),
		aTargets = document.querySelectorAll('.pop'),
		current = 0;

	Array.prototype.forEach.call(aTargets, 
		function(element) {
			targets.removeChild(element);
		});

	targets.style.display = 'block';

	Array.prototype.forEach.call(links,
		function (link, i) {
			link.addEventListener('click',
				function (event) {
					event.preventDefault();
					targets.removeChild(aTargets[current]);
					current = i;
					targets.appendChild(aTargets[current]);
				}, false);
		});

	targets.appendChild(aTargets[current]);
}(window, window.document));