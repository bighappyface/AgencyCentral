Ext.define('AgencyCentral.view.user.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.userForm',
    bodyPadding: 10,
    border: false,
    width:400,
    defaults: {
        anchor: '100%'
    },
    fieldDefaults: {
        msgTarget: 'side',
    },
	initComponent: function() {
		this.items = [
		    {
    	    	xtype: 'textfield',
    	    	id: 'name',
    	    	name: 'user[name]',
    	    	fieldLabel: 'Name',
    	    	allowBlank: false
    	    },
    	    {
                xtype: 'textfield',
                id: 'email',
                name : 'user[email]',
                fieldLabel: 'Email',
                vtype: 'email',
                allowBlank: false
            },
            {
			    xtype: 'textfield',
			    id: 'phone',
			    name : 'user[phone]',
			    fieldLabel: 'Phone',
			    allowBlank: false
			},
			{
				xtype: 'textfield',
				id: 'address',
				name: 'user[address]',
				fieldLabel: 'Address',
				allowBlank: false
			},
			{
				xtype: 'textfield',
				id: 'city',
				name: 'user[city]',
				fieldLabel: 'City',
				allowBlank: false
			},
			{
				xtype: 'textfield',
				id: 'state',
				name: 'user[state]',
				fieldLabel: 'State',
				allowBlank: false
			},
			{
				xtype: 'textfield',
				id: 'zip',
				name: 'user[zip]',
				fieldLabel: 'ZIP Code',
				allowBlank: false
			},
			{
			    xtype: 'textfield',
			    id: 'password',
			    name : 'user[password][password]',
			    fieldLabel: 'Password',
			    inputType: 'password',
			    allowBlank: false
			},
            {
                xtype: 'textfield',
                name : 'user[password][confirm]',
                fieldLabel: 'Confirm',
                inputType: 'password',
                allowBlank: false,
                validator: function(value) {
                	var password1 = this.previousSibling('#password');
            		return (value === password1.getValue()) ? true : 'Passwords do not match.';
                }
            },
            {
                xtype: 'hiddenfield',
                id: 'id',
		        name: 'user[id]'
            },
            {
				xtype: 'hiddenfield',
				id: 'agency',
		        name: 'user[agency]'
			}
		];
		this.callParent(arguments);
	}
});