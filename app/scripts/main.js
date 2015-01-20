/*global require*/
'use strict';

require.config({
  baseUrl: '/',
  paths: {
        jquery: 'bower_components/jquery/jquery',
        jqueryui: 'bower_components/jquery-ui/jquery-ui',
        modernizr: 'bower_components/modernizr/modernizr',
        
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore',
        semanticui: 'bower_components/semantic-ui/dist/semantic',
        
        infragistics_core: "app/scripts/vendor/infragistics.core",
        infragistics_dv: "app/scripts/vendor/infragistics.dv",
        infragistics_lob: "app/scripts/vendor/infragistics.lob"
    },  
  shim: {
        jqueryui: {
            deps: 'jquery',
            exports: 'jqueryui'
        },
        modernizr: {
            exports: 'Modernizr'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        semanticui: {
            deps: 'jquery',
            exports: 'Semantic'
        }
    }
});

require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();
    console.log('Hello from Backbone!');
});
