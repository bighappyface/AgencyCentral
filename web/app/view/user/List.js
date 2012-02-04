Ext.define('AgencyCentral.view.user.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.userList',
	title: 'Users',
	initComponent: function() {
		this.store = {
			fields: ['id', 'name'],
			data: [
			   {id:1, name:'David'},
			   {id:2, name:'Melissa'}
			]
		};
		this.columns = [
		    {header: 'Name', dataIndex: 'name', flex: 1}
		];
		this.callParent(arguments);
	}
});