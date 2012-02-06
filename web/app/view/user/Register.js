Ext.define('AgencyCentral.view.user.Register', {
	extend: 'Ext.window.Window',
	alias: 'widget.userRegister',
	id: 'userRegisterWindow',
	title: 'Register',
	layout: 'fit',
	modal: true,
    draggable: false,
	autoShow: true,
	initComponent: function() {
		
	    Ext.define('AgencyCentral.fieldError', {
	        extend: 'Ext.data.Model',
	        fields: ['id', 'msg']
	    });
	    
		this.items = [
		    {
		    	xtype: 'userForm',
		    	url: '/user/create',
		    	errorReader: Ext.create('Ext.data.reader.Json', {
		            model: 'AgencyCentral.fieldError',
		            record : 'field',
		            root: 'errors'
		        }),
		    	buttons: [
	      		    {
	          	    	text: 'Register',
	          	    	formBind: true, //only enabled once the form is valid
	          	        disabled: true,
	          	        handler: function() {
	          	            var form = this.up('form').getForm();
	          	            if (form.isValid()) {
	          	                form.submit({
	          	                    success: function(form, action) {
	          	                    	Ext.getCmp('userRegisterWindow').close();
	          	                    	Ext.Msg.alert('Success', 'You have successfully registered');
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