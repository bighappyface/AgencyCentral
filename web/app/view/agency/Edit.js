Ext.define('AgencyCentral.view.agency.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.agencyEdit',
	title: 'Edit Agency',
	layout: 'fit',
	autoShow: true,
	initComponent: function() {
		this.items = [
		    {
		    	xtype: 'agencyForm',
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