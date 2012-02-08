Ext.define('AgencyCentral.view.agency.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.agencyForm',
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
				name: 'agency[name]',
				fieldLabel: 'Name',
				allowBlank: false
			},
			{
			    xtype: 'textfield',
			    id: 'email',
			    name : 'agency[email]',
			    fieldLabel: 'Email',
			    vtype: 'email',
			    allowBlank: false
			},
			{
			    xtype: 'textfield',
			    id: 'url',
			    name : 'agency[url]',
			    fieldLabel: 'URL',
			    vtype: 'url',
			    allowBlank: false
			},
			{
			    xtype: 'textfield',
			    id: 'phone',
			    name : 'agency[phone]',
			    fieldLabel: 'Phone',
			    allowBlank: false
			},
			{
				xtype: 'textfield',
				id: 'address',
				name: 'agency[address]',
				fieldLabel: 'Address',
				allowBlank: false
			},
			{
				xtype: 'textfield',
				id: 'city',
				name: 'agency[city]',
				fieldLabel: 'City',
				allowBlank: false
			},
			{
				xtype: 'textfield',
				id: 'state',
				name: 'agency[state]',
				fieldLabel: 'State',
				allowBlank: false
			},
			{
				xtype: 'textfield',
				id: 'zip',
				name: 'agency[zip]',
				fieldLabel: 'ZIP Code',
				allowBlank: false
			},
			{
				xtype: 'hiddenfield',
				id: 'id',
		        name: 'agency[id]'
			}
		];
		this.callParent(arguments);
	}
});