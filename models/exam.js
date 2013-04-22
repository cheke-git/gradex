var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var ExamSchema = new Schema({
	_id: ObjectId,
	name: String,
	answers: Array
});

ExamSchema.statics.get_all = function(callback) {
	this.find({}, "name answers", function(err, data) {
		console.log(err, data);
		return callback(err, data);
	});
};

ExamSchema.statics.get = function(id, callback) {
	this.findById(id, "name answers", function(err, data) {
		return callback(err, data);
	});
};

exports.Exam = mongoose.model('Exam', ExamSchema);