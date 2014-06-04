define([
    "spa/templates"
    ],
    function(templates){
        var Gallery = Backbone.Marionette.ItemView.extend({
            template: function(){
                return window.JST["gallery.html"]([1, 2, 3, 4]);
            },
            className: 'row-fluid'
        });
        return Gallery;
    });