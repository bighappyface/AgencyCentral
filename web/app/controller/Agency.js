Ext.define('AgencyCentral.controller.Agency', {
	extend: 'Ext.app.Controller',
	models: ['Agency'],
	views: [
	    'agency.List',
	    'agency.Edit',
	    'agency.Form',
	    'agency.Info',
	    'agency.Users',
	],
	init: function() {
		this.control({
			'agencyList': {
				itemclick: this.updateAgencyDetails,
				itemdblclick: this.editAgency
			}
		});
	},
	updateAgencyDetails: function(grid, record) {
		Ext.getCmp('agencyInfoPanel').updateDetail(record.data);
	},
	editAgency: function(grid, record) {
		Ext.widget('agencyEdit').down('form').loadRecord(record);
	}
});