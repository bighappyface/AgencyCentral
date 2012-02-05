Ext.define('AgencyCentral.controller.User', {
	extend: 'Ext.app.Controller',
	models: ['User'],
	views: [
	    'user.List',
	    'user.Edit',
	    'user.Form',
	    'user.Info'
	],
	init: function() {
		this.control({
			'userList': {
				itemclick: this.updateUserDetails,
				itemdblclick: this.editUser
			}
		});
	},
	updateUserDetails: function(grid, record) {
		Ext.getCmp('userInfoPanel').updateDetail(record.data);
	},
	editUser: function(grid, record) {
		Ext.widget('userEdit').down('form').loadRecord(record);
	}
});