Ext.define('AgencyCentral.view.front.Main', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.frontMain',
	initComponent: function() {
		this.layout = 'border';
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
	            xtype: 'userList'
	        }
	    ];
		this.callParent(arguments);
	}
});