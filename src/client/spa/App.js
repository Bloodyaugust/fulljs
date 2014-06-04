define([
	"spa/Layout",
	"spa/Menu",
	"spa/Hello",
	"spa/Info",
	"spa/Gallery"
	],
	function(Layout, Menu, Hello, Info, Gallery){
	var App = Backbone.Marionette.Application.extend({
		init: function(){
			this.layout = new Layout();
			this.mainRegion.show(this.layout);
			this.layout.menu.show(new Menu({
				app: this
			}));
			this.layout.content.show(new Hello());
		},
		showHome: function(){
			this.layout.content.show(new Hello());
		},
		showInfo: function(){
			this.layout.content.show(new Info());
		},
		showGallery: function(){
			this.layout.content.show(new Gallery());
		}
	});
	return App;
});