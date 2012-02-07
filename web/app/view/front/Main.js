Ext.define('AgencyCentral.view.front.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.frontMain',
	initComponent: function() {
		this.title = 'Agency Central';
		this.layout = 'border';
	    this.items = [
			{
				region: 'north',
			    xtype: 'frontToolbar',
			    id: 'topToolbar',
			    split: true,
			},
	        {
	        	region: 'west',
	        	xtype: 'agencyList',
	        	split: true,
	        	width: '25%',
	        	minSize: 175,
	        },
	        {
	        	region: 'center',
	            xtype: 'tabpanel',
	            id: 'agencyTabs',
	            items: [
	                {xtype: 'agencyInfo', id: 'agencyInfoPanel'},
	                {xtype: 'agencyUsers', id: 'agencyUsersPanel', hidden: true}
		        ]
	        }
	    ];
		this.callParent(arguments);
	}
});