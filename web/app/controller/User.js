Ext.define('AgencyCentral.controller.User', {
	extend: 'Ext.app.Controller',
	models: ['User'],
	views: [
	    'user.List',
	    'user.Edit',
	    'user.Form',
	    'user.Info'
	],
	currUser: null,
	init: function() {
		this.control({
			'userList': {
				itemclick: this.selectUser
			},
			'#userEditButton': {
				click: this.editUser
			}
		});
	},
	selectUser: function(grid, record) {
		return this.updateUserDetails(record.data.id);
	},
	updateUserDetails: function(id) {
		var id = (!id) ? this.currUser.data.id : id;
		var c = this;
		this.getModel('User').load(id, {
			success: function(model) {
				c.currUser = model;
				var editButton = Ext.getCmp('userEditButton');
				if(model.data.allowEdit){
					editButton.enable();
				}else{
					editButton.disable();
				}
				Ext.getCmp('userInfoPanel').updateDetail(model.data);
			}
		});
		
	},
	editUser: function(grid, record) {
		Ext.widget('userEdit').down('form').loadRecord( this.currUser );
	}
});