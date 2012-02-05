Ext.define('AgencyCentral.view.user.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.userEdit',
	title: 'Edit User',
	layout: 'fit',
	autoShow: true,
	initComponent: function() {
		this.items = [
		    {
		    	xtype: 'userForm',
		    	buttons: [
	      		    {
	          	    	text: 'Save',
	          	    	action: 'save'
	          	    },
	          	    {
	          	    	text: 'Cancel',
	          	    	scope: this,
	          	    	handler: this.close
	          	    }
	      		]
		    }
		];
		this.callParent(arguments);
	}
});