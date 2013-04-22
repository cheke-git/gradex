exports.test = function(req, res) {
	var dv = require('dv');
	var fs = require('fs');

	var answers = new dv.Image('png', fs.readFileSync(__dirname + '/../answers/_.png'));
	var open = answers.thin('bg', 4, 5).dilate(1, 1);
	fs.writeFile(__dirname + '/../answers/__1.png', open.toBuffer('png'));

	var openMap = open.distanceFunction(4);
	fs.writeFile(__dirname + '/../answers/__2.png', openMap.toBuffer('png'));

	var openMask = openMap.threshold(15).erode(22, 22);
	fs.writeFile(__dirname + '/../answers/__3.png', openMask.toBuffer('png'));

	var boxes = openMask.invert().connectedComponents(4);
	for (var i in boxes) {
		var boxImage = answers.crop(
			boxes[i].x, boxes[i].y,
			boxes[i].width, boxes[i].height);
		// Do something useful with our image.
		console.log(boxes[i]);
	}
	res.send(200);
};