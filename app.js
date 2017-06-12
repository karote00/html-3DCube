document.addEventListener('DOMContentLoaded', function() {
	var cube = document.querySelector('.cube');

	var view = document.querySelector('.view');
	var viewTarns = false;
	var mouseDownX = 0;
	var mouseDownY = 0;

	view.addEventListener('mousedown', function(e) {
		viewTarns = true;
		mouseDownX = e.pageX;
		mouseDownY = e.pageY;
	});

	view.addEventListener('mouseup', function(e) {
		// console.log('mouseup')
	});

	view.addEventListener('mousemove', function(e) {
		if (viewTarns) {
			var deltaX = e.pageX - mouseDownX;
			var deltaY = mouseDownY - e.pageY;
			var trans = cube.style.transform;
			var xidx = trans.indexOf('rotateX');
			var yidx = trans.indexOf('rotateY');
			var rtx = deltaY / 50;
			var rty = deltaX / 50;

			if (xidx > -1) {
				var rcs = trans.substr(xidx + 8);
				var xd = rcs.substr(0, rcs.indexOf('deg')) | 0;
				rtx = rtx + xd;
			}

			if (yidx > -1) {
				var rcs = trans.substr(yidx + 8);
				var yd = rcs.substr(0, rcs.indexOf('deg')) | 0;
				rty = rty + yd;
			}

			cube.style.transform = 'rotateX(' + rtx + 'deg) rotateY(' + rty + 'deg)';
		}
	});

	view.addEventListener('mouseleave', function(e) {
		viewTarns = false;
	});

	var cubeClick = false;
	view.addEventListener('click', function(e) {
		if (!cubeClick && lastTarget && !viewTarns) removeClass(lastTarget, ' clicked');
		cubeClick = false;
		viewTarns = false;
	});

	cube.addEventListener('click', function(e) {
		cubeClick = true;
		var tar = e.target;
		tar.className += ' clicked';
		if (lastTarget) removeClass(lastTarget, ' clicked');
		lastTarget = tar;
	});
});

var lastTarget = null;
function changeBlockBackground(e) {
	if (lastTarget) {
		removeClass(lastTarget, ' clicked');
		lastTarget.style.background = e.value;
	}
}

function removeClass(tar, className) {
	tar.className = tar.className.replace(className, '')

}
