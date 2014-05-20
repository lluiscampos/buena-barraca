/*global BuenaBarraca, Backbone, JST*/

BuenaBarraca.Views = BuenaBarraca.Views || {};

(function () {
    'use strict';

    BuenaBarraca.Views.EntryView = Backbone.View.extend({

        template: JST['app/scripts/templates/EntryView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
