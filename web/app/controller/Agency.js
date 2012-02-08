Ext.define('AgencyCentral.controller.Agency', {
	extend: 'Ext.app.Controller',
	id: 'agencyController',
	models: ['Agency'],
	views: [
	    'agency.List',
	    'agency.Edit',
	    'agency.Form',
	    'agency.Info',
	    'agency.Users'
	],
	currAgency: null,
	init: function() {
		this.control({
			'agencyList': {
				itemclick: this.selectAgency
			},
			'#agencyEditButton': {
				click: this.editAgency
			},
			'#userLoginWindow': {
				close: this.resetUserDetails
			},
			'#userRegisterWindow': {
				close: this.resetUserDetails
			}
		});
		this.addEvents('resetUserDetails');
		var c = this;
		this.listeners = {
			resetUserDetails: c.resetUserDetails
		};
	},
	selectAgency: function(grid, record) {
		return this.updateAgencyDetails(record.data.id);
	},
	updateAgencyDetails: function(id) {
		var id = (!id) ? this.currAgency.data.id : id;
		var c = this;
		this.getModel('Agency').load(id, {
			success: function(model) {
				c.currAgency = model;
				c.resetUserDetails();
				var tabs = Ext.getCmp('agencyTabs');
				var infoPanel = tabs.child('#agencyInfoPanel');
				infoPanel.updateDetail(model.data);
				tabs.setActiveTab( infoPanel );
				var usersPanel = tabs.child('#agencyUsersPanel');
				(model.data.users) ? usersPanel.tab.show() : usersPanel.tab.hide();
				Ext.getCmp('userEditButton').disable();
				var editButton = Ext.getCmp('agencyEditButton');
				if(model.data.allowEdit){
					editButton.enable();
				}else{
					editButton.disable();
				}
				Ext.getCmp('userList').getStore().loadData(model.data.users);
				Ext.getCmp('userInfoPanel').update('Please select a user to see details');
			}
		});
	},
	resetUserDetails: function() {
		var tabs = Ext.getCmp('agencyTabs');
		var usersPanel = tabs.child('#agencyUsersPanel');
		usersPanel.tab.hide();
		var infoPanel = tabs.child('#agencyInfoPanel');
		infoPanel.update('Please select an agency to see details');
	},
	editAgency: function() {
		Ext.widget('agencyEdit').down('form').loadRecord( this.currAgency );
	}
});