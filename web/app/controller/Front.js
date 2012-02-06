Ext.define('AgencyCentral.controller.Front', {
	extend: 'Ext.app.Controller',
	stores: ['Agencies','Users'],
	views: [
	    'front.Login',
	    'user.Register'
	],
	init: function() {
		Ext.create('AgencyCentral.view.front.Main', {});
	}
});