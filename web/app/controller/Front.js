Ext.define('AgencyCentral.controller.Front', {
	extend: 'Ext.app.Controller',
	id: 'frontController',
	stores: ['Agencies','Users'],
	models: ['FieldError','Login','Logout'],
	views: [
	    'front.Main',
	    'front.Login',
	    'user.Register'
	],
	init: function() {
		Ext.create('AgencyCentral.view.front.Main');
	},
	checkLogin: function() {
		this.getModel('Login').load(0, {
			success: function(model) {
				Ext.getCmp('frontMain').arrangeToolbar( model.get('user') );
			}
		});
	},
	logout: function() {
		this.getModel('Logout').load(0, {
			success: function(model) {
				Ext.get('frontController').checkLogin();
			}
		});
	}
});