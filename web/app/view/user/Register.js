Ext.define('AgencyCentral.view.user.Register', {
	extend: 'Ext.window.Window',
	alias: 'widget.userRegister',
	id: 'userRegisterWindow',
	title: 'Register User',
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
		    	xtype: 'userForm',
		    	url: '/user/create',
		    	errorReader: Ext.create('Ext.data.reader.Json', {
		            model: 'AgencyCentral.model.FieldError',
		            record : 'field'
		        }),
		    	buttons: [
	      		    {
	          	    	text: 'Register',
	          	    	formBind: true,
	          	        disabled: true,
	          	        handler: function() {
	          	            var form = this.up('form').getForm();
	          	            if (form.isValid()) {
	          	                form.submit({
	          	                	waitMsg: 'Registering...',
	          	                    success: function(form, action) {
	          	                    	Ext.getCmp('userRegisterWindow').close();
	          	                    	Ext.Msg.alert('Success', 'You have successfully registered');
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