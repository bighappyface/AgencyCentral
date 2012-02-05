Ext.define('AgencyCentral.controller.Front', {
	extend: 'Ext.app.Controller',
	stores: ['Agencies','Users'],
	init: function() {
		Ext.create('AgencyCentral.view.front.Main', {});
	}
});