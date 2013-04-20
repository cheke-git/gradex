exports.test = function(req, res) {
	var dv = require('dv');
	var fs = require('fs');

	var answers = new dv.Image('jpg', fs.readFileSync(__dirname + '/../answers/2.JPG'));
	var open = answers.thin('bg', 8, 5).dilate(3, 3);
	var openMap = open.distanceFunction(8);
	var openMask = openMap.threshold(10).erode(22, 22);
	var boxes = openMask.invert().connectedComponents(8);
	for (var i in boxes) {
		var boxImage = answers.crop(
			boxes[i].x, boxes[i].y,
			boxes[i].width, boxes[i].height);
		// Do something useful with our image.
		console.log(boxes[i]);
	}
	res.send(200);
};