Ext.define('AgencyCentral.controller.Agency', {
	extend: 'Ext.app.Controller',
	id: 'agencyController',
	models: ['Agency'],
	views: [
	    'agency.List',
	    'agency.Edit',
	    'agency.Form',
	    'agency.Info',
	    'agency.Users',
	],
	currAgency: null,
	init: function() {
		this.addListener('updateAgency', this.fauxUpdate);
		this.control({
			'agencyList': {
				itemclick: this.selectAgency
			},
			'#agencyEditButton': {
				click: this.editAgency
			}
		});
	},
	fauxUpdate: function() {
		console.log('update agency event');
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
				var tabs = Ext.getCmp('agencyTabs');
				var infoPanel = tabs.child('#agencyInfoPanel');
				infoPanel.updateDetail(model.data);
				tabs.setActiveTab( infoPanel );
				var usersPanel = tabs.child('#agencyUsersPanel');
				(model.data.users) ? usersPanel.tab.show() : usersPanel.tab.hide();
				var editButton = Ext.getCmp('agencyEditButton').enable();
				if(model.data.allowEdit){
					editButton.enable();
				}else{
					editButton.disable();
				}
				Ext.getCmp('userList').getStore().loadData(model.data.users);
			}
		});
	},
	editAgency: function() {
		Ext.widget('agencyEdit').down('form').loadRecord( this.currAgency );
	}
});