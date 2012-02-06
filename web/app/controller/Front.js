Ext.define('AgencyCentral.controller.Front', {
	extend: 'Ext.app.Controller',
	stores: ['Agencies','Users'],
	models: ['FieldError'],
	views: [
	    'front.Login',
	    'user.Register'
	],
	init: function() {
		Ext.create('AgencyCentral.view.front.Main', {});
	}
});