Ext.define('AgencyCentral.view.front.Login', {
    extend: 'Ext.window.Window',
    alias : 'widget.frontLogin',
    id: 'userLoginWindow',
    title : 'Login',
    layout: 'fit',
    modal: true,
    draggable: false,
    autoShow: true,
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                url: '/user/login',
		    	errorReader: Ext.create('Ext.data.reader.Json', {
		            model: 'AgencyCentral.model.FieldError',
		            record : 'field',
		            root: 'errors'
		        }),
                bodyPadding: 10,
                border: false,
                items: [
                    {
                        xtype: 'textfield',
                        id: 'email',
                        name : 'login[email]',
                        fieldLabel: 'Email',
                        vtype: 'email',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        id: 'password',
                        name : 'login[password]',
                        fieldLabel: 'Password',
                        inputType: 'password',
                        allowBlank: false
                    }
                ],
                buttons: [
          		    {
              	    	text: 'Login',
              	        handler: function() {
              	            var form = this.up('form').getForm();
              	            if (form.isValid()) {
              	                form.submit({
              	                	waitMsg: 'Logging in...',
              	                    success: function(form, action) {
              	                    	Ext.getCmp('userLoginWindow').close();
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