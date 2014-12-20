import Ember from 'ember';

export default Ember.View.extend({
    template: Ember.Handlebars.compile('<span class="" > {{data-original-title}} </span>'),
    tagName: 'span',
    classNames: ['tooltips','glyphicon'],
    attributeBindings: ['href', 'data-toggle', 'data-original-title'],
    classNameBindings: ['glyphicon'],
    href: '#',
    'data-toggle': 'tooltip',
    didInsertElement: function(){
        this.$().tooltip()
    }

});
