define([
    "spa/templates"
    ],
    function(templates){
        var Info = Backbone.Marionette.ItemView.extend({
            template: function(){
                return window.JST["info.html"]([1, 2, 3, 4]);
            },
            className: 'row-fluid'
        });
        return Info;
    });