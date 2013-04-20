var exams = require('../controllers/exams');

exports = module.exports = function(app, basePath) {
	app.get(basePath + '/exams', exams.list);
	app.get(basePath + '/exams/:id', exams.get);
	app.get(basePath + '/exams/:id/render', exams.render);
	app.get(basePath + '/exams/:id/pdf', exams.pdf);
	app.post(basePath + '/exams', exams.add);
};