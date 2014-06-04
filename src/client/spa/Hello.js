define([
	"spa/templates"
	],
	function(templates){
		console.log(templates);
		var Hello = Backbone.Marionette.ItemView.extend({
			template: function(){
				return window.JST["hello.html"]({name: '<%= name %>'});
			},
			className: 'row-fluid'
		});
		return Hello;
	});