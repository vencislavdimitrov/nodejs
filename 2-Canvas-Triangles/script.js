window.onload = function() {
	$('#canvas').on('click', function (e) {
		var x = e.clientX;
		var y = e.clientY;

		window.clicks = window.clicks || [];
		window.clicks.push({"x": x, "y": y});

		if (window.clicks.length == 3) {
			draw();
			window.clicks = [];
		}
	});

	$('#clear').on('click', function(e) {
		var canvas = document.getElementById('canvas');
		if (canvas.getContext){
			var ctx = canvas.getContext('2d');

			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	})

	var draw = function() {
		var canvas = document.getElementById('canvas');
		if (canvas.getContext){
			var ctx = canvas.getContext('2d');

			ctx.beginPath();
			ctx.moveTo(window.clicks[0].x, window.clicks[0].y);
			ctx.lineTo(window.clicks[1].x, window.clicks[1].y);
			ctx.lineTo(window.clicks[2].x, window.clicks[2].y);
			ctx.fillStyle = $('#color').val();
			ctx.fill();
		}
	}
};