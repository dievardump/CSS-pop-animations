(function () {
	'use strict';
	var links = document.getElementsByClassName('links')[0].getElementsByTagName('a'),
		targets = document.getElementsByClassName('target'),
		current = 0,
		className = 'pop';

	function removeClass (element, className) {
		element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)'), '$1');
	};

	function addClass (element, className) {
		element.className += ' ' + className;
	};

	Array.prototype.forEach.call(links, 
		function (link, i) {
			link.addEventListener('click', 
				function (event) {
					event.preventDefault();
					removeClass(targets[current], className);
					current = i;
					addClass(targets[current], className);
			}, false);
		}
	);

	addClass(targets[current], className);
}());