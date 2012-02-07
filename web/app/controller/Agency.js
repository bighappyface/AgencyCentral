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
				itemclick: this.updateAgencyDetails
			},
			'#agencyEditButton': {
				click: this.editAgency
			},
			'#agencyRefreshButton': {
				click: this.refreshAgency
			},
			'#agencyEdit': {
				close: this.refreshAgency
			}
		});
	},
	updateAgencyDetails: function(grid, record) {
		var tabs = Ext.getCmp('agencyTabs');
		var users = tabs.child('#agencyUsersPanel');
	    tabs.setActiveTab( tabs.child('#agencyInfoPanel') );
	    (record.data.users) ? users.tab.show() : users.tab.hide();
		Ext.getCmp('agencyInfoPanel').updateDetail(record.data);
		if(record.data.allowEdit){
			Ext.getCmp('agencyEditButton').enable();
		}else{
			Ext.getCmp('agencyEditButton').disable();
		}
		
	},
	editAgency: function() {
		var model = Ext.getCmp('agencyList').getSelectionModel().getLastSelected();
		Ext.widget('agencyEdit').down('form').loadRecord( model );
	},
	refreshAgency: function() {
		Ext.getCmp('agencyList').getStore().load();
	}
});