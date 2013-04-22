var exams = require('../controllers/exams'),
	omr = require('../controllers/omr');

exports = module.exports = function (app, basePath) {
	app.get(basePath + '/exams', exams.list);
	app.get(basePath + '/exams/:id', exams.get);
	app.get(basePath + '/exams/:id/render', exams.render);
	app.get(basePath + '/exams/:id/answers', exams.answers);
	app.get(basePath + '/exams/:id/pdf', exams.pdf);
	app.post(basePath + '/exams', exams.add);

	app.get(basePath + '/omr', omr.test);
};