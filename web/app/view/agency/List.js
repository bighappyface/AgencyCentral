Ext.define('AgencyCentral.view.agency.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.agencyList',
	title: 'Agencies',
	initComponent: function() {
		this.store = {
			fields: ['id', 'name'],
			data: [
			   {id:1, name:'Super Agency'},
			   {id:2, name:'OK Agency'}
			]
		};
		this.columns = [
		    {header: 'Name', dataIndex: 'name', flex: 1}
		];
		this.callParent(arguments);
	}
});