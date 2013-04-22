var request = require('request'),
	qs = require('querystring'),
	fs = require('fs'),
	hogan = require('hjs'),
	Exam = require('../models/exam.js').Exam;

exports.list = function (req, res) {
	Exam.get_all(function (err, exams) {
		res.json(exams);
	});
};

exports.get = function (req, res) {
	Exam.get(req.params.id, function (err, exam) {
		res.json(exam);
	});
};

exports.pdf = function (req, res) {
	// var url = 'http://htmltopdfapi.com/querybuilder/api.php',
	var url = 'http://localhost:3000/api/v0/exams/' + req.params.id + '/render',
		query = {
			url: 'http://direct.erickrdch.com:3000/api/v0/exams/' + req.params.id + '/render',
			orientation: 'portrait',
			grayscale: 'true',
			outline: 'true',
			page_width: '210',
			page_height: '297',
			margin_left: '10',
			margin_right: '10',
			margin_top: '10',
			margin_bottom: '10',
			cover: '',
			toc: 'false',
			toc_disable_back_links: 'false',
			toc_disable_links: 'false',
			toc_no_dots: 'false',
			toc_depth: '3',
			toc_header_font_size: '15',
			toc_header_text: '',
			toc_l1_font_size: '12',
			toc_l1_indentation: '0',
			toc_l2_font_size: '10',
			toc_l2_indentation: '20',
			toc_l3_font_size: '8',
			toc_l3_indentation: '40',
			toc_l4_font_size: '6',
			toc_l4_indentation: '60',
			toc_l5_font_size: '4',
			toc_l5_indentation: '80',
			toc_l6_font_size: '2',
			toc_l6_indentation: '100',
			toc_l7_font_size: '0',
			toc_l7_indentation: '120',
			default_header: 'false',
			header_line: 'false',
			footer_line: 'false',
			header_font_size: '11',
			header_spacing: '0',
			footer_font_size: '11',
			footer_spacing: '0',
			header_html: '',
			header_left: '',
			header_center: '',
			header_right: '',
			footer_html: '',
			footer_left: '',
			footer_center: '',
			footer_right: '',
			no_background: 'false',
			stop_slow_scripts: 'true',
			forms: 'false',
			print_media_type: 'false',
			disable_internal_links: 'true',
			disable_external_links: 'true',
			disable_javascript: 'true',
			disable_smart_shrinking: 'false',
			disable_pdf_compression: 'false',
			zoom: '1',
			copies: '1',
			page_offset: '1',
			outline_depth: '4',
			dpi: '300',
			minimum_font_size: '5',
			title: '',
			encoding: '',
			user_style_sheet: '',
			redirect_delay: '200',
			'cookie-name': '',
			'cookie-value': '',
			'custom_header-name': '',
			'custom_header-value': '',
			username: '',
			password: '',
			'post-name': '',
			'post-value': '',
			'replace-name': '',
			'replace-value': '',
		};

	// request.get(url + '?' + qs.stringify(query)).pipe(res);
	request.get(url).pipe(res);

	// res.send(200);
	// request.get(url + '?' + qs.stringify(query), function(err, resp, body) {
	// 	fs.writeFile(__dirname + '/../pdfs/' + req.params.id + '.pdf', body, 'binary', function(err) {
	// 		console.log('writeFile done!');
	// 	});
	// });
};

function process_answers(answers, answered) {
	return answers.map(function (answer, key) {
		var options = [],
			i = 0;

		for (; i < 5; i++) {
			options.push({
				image: answered && i + 1 === answer ? 'On' : ''
			});
		}

		return {
			number: key + 1,
			options: options
		};
	});
}

function load_template(callback) {
	var template;
	fs.readFile(__dirname + '/../public/templates/pdf/index.html', 'utf-8', function (err, data) {
		template = hogan.compile(data);
		callback(err, template);
	});
}

function render(id, answered, callback) {
	Exam.get(id, function (err, exam) {
		load_template(function (err, template) {
			exam.answers = process_answers(exam.answers, answered);
			callback(err, template.render(exam));
		});
	});
}

exports.render = function (req, res) {
	render(req.params.id, false, function (err, html) {
		res.send(html);
	});
};

exports.answers = function (req, res) {
	render(req.params.id, true, function (err, html) {
		res.send(html);
	});
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