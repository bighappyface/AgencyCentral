Ext.define('AgencyCentral.controller.Agency', {
	extend: 'Ext.app.Controller',
	views: ['agency.List'],
	init: function() {
		this.control({
			'agencyList': {
				itemdblclick: this.editAgency
			}
		});
	},
	editAgency: function(grid, record) {
		console.log(record.get('id'));
		console.log(record.get('name'));
	}
});