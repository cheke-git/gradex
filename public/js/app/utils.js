define(['handlebars'], function (Handlebars) {
	return {
		loadTemplate: function (file_name, use_ajax) {
			var template = null;
			if (use_ajax) {
				$.ajax({
					url: 'js/app/templates/' + file_name,
					dataType: 'text',
					async: false,
					error: function () {
						template = Handlebars.compile('Template not found!');
					},
					success: function (data) {
						template = Handlebars.compile(data);
					}
				});
			} else if (Handlebars.templates[file_name]) {
				template = Handlebars.templates[file_name];
			} else {
				template = Handlebars.compile('Error while loading template!');
			}

			return template;
		}
	};
});