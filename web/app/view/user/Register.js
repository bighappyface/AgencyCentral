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
		    	xtype: 'form',
		    	url: '/user/create',
		    	bodyPadding: 10,
		    	border: false,
		    	errorReader: Ext.create('Ext.data.reader.Json', {
		            model: 'AgencyCentral.model.FieldError',
		            record : 'field'
		        }),
		        items: [
          		    {
              	    	xtype: 'textfield',
              	    	name: 'registration[user][name]',
              	    	fieldLabel: 'Name',
              	    	allowBlank: false
              	    },
              	    {
                          xtype: 'textfield',
                          id: 'email',
                          name : 'registration[user][email]',
                          fieldLabel: 'Email',
                          vtype: 'email',
                          allowBlank: false
                      },
                      {
                          xtype: 'textfield',
                          id: 'password',
                          name : 'registration[user][password][password]',
                          fieldLabel: 'Password',
                          inputType: 'password',
                          allowBlank: false
                      },
                      {
                          xtype: 'textfield',
                          name : 'registration[user][password][confirm]',
                          fieldLabel: 'Confirm',
                          inputType: 'password',
                          allowBlank: false,
                          validator: function(value) {
                              var password1 = this.previousSibling('#password');
                              return (value === password1.getValue()) ? true : 'Passwords do not match.';
                          }
                      },
                      {
                          xtype: 'combobox',
                          fieldLabel: 'Agency',
                          name: 'registration[user][agency]',
                          store: 'Agencies',
                          valueField: 'id',
                          displayField: 'name',
                          typeAhead: true,
                          queryMode: 'local',
                          emptyText: 'Select an Agency'
                      }
          		],
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