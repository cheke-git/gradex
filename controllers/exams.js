var Exam = require('../models/exam.js').Exam;

exports.list = function (req, res) {
	Exam.get_all(function (err, exams) {
		res.json(exams);
	});
};

exports.get = function (req, res) {
	Exam.get(req.params.id, function (err, exams) {
		res.json(exams);
	});
};

exports.pdf = function (req, res) {

};

exports.add = function (req, res) {
	var exam = new Exam({
		name: req.body.name,
		answers: req.body.answers
	});

	exam.save(function (err, exam) {
		res.json(exam);
	});
};