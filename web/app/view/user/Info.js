Ext.define('AgencyCentral.view.user.Info', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.userInfo',
	tplMarkup: [
        '<h1 class="agencyName">{name}</h1>',
        '<p class="agencyDetail"><strong>E-mail:</strong> {email}</p>',
        '<p class="agencyDetail"><strong>Phone:</strong> {phone}</p>',
        '<p class="agencyDetail"><strong>Address:</strong> {address}</p>',
        '<p class="agencyDetail"><strong>City:</strong> {city}</p>',
        '<p class="agencyDetail"><strong>State:</strong> {state}</p>',
        '<p class="agencyDetail"><strong>ZIP Code:</strong> {zip}</p>'
    ],
    startingMarkup: 'Please select a user to see details',
    bodyPadding: 5,
	initComponent: function() {
		this.tpl = Ext.create('Ext.Template', this.tplMarkup);
        this.html = this.startingMarkup;
        this.bodyStyle = {
            background: '#ffffff'
        };
        this.dockedItems = [
            {
            	xtype: 'toolbar',
            	items: [
            	    {
            	    	text: 'Edit',
            	    	id: 'userEditButton',
            	    	iconCls: 'icon-user-edit',
            	    	disabled:true
            	    }
            	]
            }
        ];
        this.callParent();
	},
    updateDetail: function(data) {
        this.tpl.overwrite(this.body, data);
    }
});