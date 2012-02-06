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
		var tabs = Ext.getCmp('agencyTabs');
		var users = tabs.child('#agencyUsersPanel');
	    tabs.setActiveTab( tabs.child('#agencyInfoPanel') );
	    (record.data.users) ? users.tab.show() : users.tab.hide();
		Ext.getCmp('agencyInfoPanel').updateDetail(record.data);
	},
	editAgency: function(grid, record) {
		Ext.widget('agencyEdit').down('form').loadRecord(record);
	}
});