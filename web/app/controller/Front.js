Ext.define('AgencyCentral.controller.Front', {
	extend: 'Ext.app.Controller',
	init: function() {
		Ext.create('AgencyCentral.view.front.Main', {});
	}
});