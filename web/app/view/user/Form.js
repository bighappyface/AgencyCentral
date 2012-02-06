Ext.define('AgencyCentral.view.user.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.userForm',
    bodyPadding: 10,
    border: false,
	initComponent: function() {
		this.items = [
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
		];
		this.callParent(arguments);
	}
});