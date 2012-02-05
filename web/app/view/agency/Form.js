Ext.define('AgencyCentral.view.agency.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.agencyForm',
	initComponent: function() {
		this.items = [
		    {
    	    	xtype: 'textfield',
    	    	name: 'name',
    	    	fieldLabel: 'Name'
    	    }
		];
		this.callParent(arguments);
	}
});