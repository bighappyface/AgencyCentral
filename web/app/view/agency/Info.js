Ext.define('AgencyCentral.view.agency.Info', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.agencyInfo',
	title: 'Details',
	tplMarkup: [
        '<h1 class="agencyName">{name}</h1>',
        '<p class="agencyDetail"><strong>URL:</strong> <a href="{url}" target="_blank">{url}</a></p>',
        '<p class="agencyDetail"><strong>E-mail:</strong> {email}</p>',
        '<p class="agencyDetail"><strong>Phone:</strong> {phone}</p>',
        '<p class="agencyDetail"><strong>Address:</strong> {address}</p>',
        '<p class="agencyDetail"><strong>City:</strong> {city}</p>',
        '<p class="agencyDetail"><strong>State:</strong> {state}</p>',
        '<p class="agencyDetail"><strong>ZIP Code:</strong> {zip}</p>',
    ],
    startingMarkup: 'Please select an agency to see details',
    bodyPadding: 5,
	initComponent: function() {
		this.tpl = Ext.create('Ext.Template', this.tplMarkup);
        this.html = this.startingMarkup;
        this.bodyStyle = {
            background: '#ffffff',
        };
        this.dockedItems = [
            {
            	xtype: 'toolbar',
            	items: [
            	    {
            	    	text: 'Edit',
            	    	id: 'agencyEditButton',
            	    	iconCls: 'icon-agency-edit',
            	    	disabled:true
            	    },
            	    {
            	    	text: 'Refresh',
            	    	id: 'agencyRefreshButton'
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