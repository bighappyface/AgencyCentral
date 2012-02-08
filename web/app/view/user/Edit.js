Ext.define('AgencyCentral.view.user.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.userEdit',
	id: 'userEdit',
	title: 'Edit User',
	layout: 'fit',
	modal: true,
    draggable: false,
	autoShow: true,
	initComponent: function() {
		this.items = [
		    {
		    	xtype: 'userForm',
		    	id: 'userEditForm',
		    	url: '/user/update',
		    	errorReader: Ext.create('Ext.data.reader.Json', {
		            model: 'AgencyCentral.model.FieldError',
		            record : 'field'
		        }),
		    	buttons: [
	      		    {
	          	    	text: 'Update',
	          	        handler: function() {
	          	            var form = this.up('form').getForm();
	          	            var button = this;
	          	            if (form.isValid()) {
	          	                form.submit({
	          	                	//waitMsg: 'Updating...',
	          	                    success: function(form, action) {
	          	                    	Ext.getCmp('userEdit').close();
	          	                    	Ext.Msg.alert('Success', 'Agency updated successfully');
	          	                    },
	          	                    error: function(form, action) {
	          	                    	Ext.Msg.alert('Error', 'An Error Occurred');
	          	                    }
	          	                });
	          	            }
	          	        }
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