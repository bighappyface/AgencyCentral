Ext.define('AgencyCentral.view.user.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.userList',
	store: 'Users',
	initComponent: function() {
		this.columns = [
		    {header: 'Name', dataIndex: 'name', flex: 1}
		];
		this.callParent();
	}
});