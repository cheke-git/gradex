/*globals Handlebars:false*/
(function (_42, $) {
	_42.utils = _42.utils || {};
	_42.utils.loadTemplate = function (file_name, use_ajax) {
		if (use_ajax) {
			$.ajax({
				url: 'js/app/templates/' + name,
				dataType: 'text',
				async: false,
				error: function () {
					return Handlebars.compile('Template not found!');
				},
				success: function (data) {
					return Handlebars.compile(data);
				}
			});
		} else if (Handlebars.templates[file_name]) {
			return Handlebars.templates[file_name];
		} else {
			return Handlebars.compile('Error while loading template!');
		}
	};
}(window._42 = window._42 || {}, jQuery));