Ext.define('AgencyCentral.view.agency.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.agencyList',
	id: 'agencyList',
	title: 'Agencies',
	store: 'Agencies',
	initComponent: function() {
		this.columns = [
		    {header: 'Name', dataIndex: 'name', flex: 1}
		];
		this.callParent(arguments);
	}
});