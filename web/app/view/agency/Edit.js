Ext.define('AgencyCentral.view.agency.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.agencyEdit',
	id: 'agencyEdit',
	title: 'Edit Agency',
	layout: 'fit',
	modal: true,
    draggable: false,
	autoShow: true,
	initComponent: function() {
		Ext.define('AgencyCentral.model.FieldError', {
		    extend: 'Ext.data.Model',
		    fields: ['id', 'msg']
		});
		this.items = [
		    {
		    	xtype: 'agencyForm',
		    	id: 'agencyEditForm',
		    	url: '/agency/update',
		    	errorReader: Ext.create('Ext.data.reader.Json', {
		            model: 'AgencyCentral.model.FieldError',
		            record : 'field'
		        }),
		    	buttons: [
	      		    {
	          	    	text: 'Update',
	          	    	formBind: true,
	          	        disabled: true,
	          	        handler: function() {
	          	            var form = this.up('form').getForm();
	          	            var button = this;
	          	            if (form.isValid()) {
	          	                form.submit({
	          	                	waitMsg: 'Updating...',
	          	                    success: function(form, action) {
	          	                    	Ext.getCmp('agencyEdit').close();
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