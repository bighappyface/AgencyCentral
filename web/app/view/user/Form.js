Ext.define('AgencyCentral.view.user.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.userForm',
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