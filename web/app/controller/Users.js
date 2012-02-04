Ext.define('AgencyCentral.controller.Users', {
	extend: 'Ext.app.Controller',
	views: ['user.List'],
	init: function() {
		this.control({
			'userList': {
				itemdblclick: this.editUser
			}
		});
	},
	editUser: function(grid, record) {
		console.log(record.get('id'));
		console.log(record.get('name'));
	}
});