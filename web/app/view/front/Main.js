Ext.define('AgencyCentral.view.front.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.frontMain',
	initComponent: function() {
		this.title = 'Agency Central';
		this.layout = 'border';
		this.bodyPadding = '5';
	    this.items = [
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
	    this.dockedItems = [
  			{
  			    xtype: 'frontToolbar',
  			    id: 'topToolbar',
  			}
  	    ];
		this.callParent(arguments);
	}
});