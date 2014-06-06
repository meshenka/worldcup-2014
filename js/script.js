'use strict';
/* global console:false */
/* global jQuery:false */
/* global Hogan:false */

(function($){
	$(document).ready(function(){
		//load ajax des data
		/*
		$.getJSON('/data/providers.json', null, function(data){
			console.log('done');
			console.log(data);
		});
		*/
		$('#loader').click(function(e){
			e.preventDefault();

			console.info('fetching data');
			
			
			$.getJSON('/data/providers.json')
			.done(function(data){
				console.log('done');
				console.log(data);
				
				var holder = $('#accordion');
				holder.empty();
				
				var template = $('#country').html();
				var compiledTemplate = Hogan.compile(template);

				for (var key in data) {
					var team = { 'country' : key, 'data': data[key]};

					console.log(team);
					var renderedTemplate = compiledTemplate.render(team);
					holder.append(renderedTemplate);
				}
				holder.accordion();
			});
		});

	});
})(jQuery);