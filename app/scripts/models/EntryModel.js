/*global BuenaBarraca, Backbone*/

BuenaBarraca.Models = BuenaBarraca.Models || {};

(function () {
    'use strict';

    BuenaBarraca.Models.EntryModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
