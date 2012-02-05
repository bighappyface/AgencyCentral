Ext.define('AgencyCentral.view.front.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.frontMain',
	renderTo: Ext.getBody(),
	initComponent: function() {
		this.title = 'Agency Central';
		this.layout = {
			type: 'border',
			align: 'stretch',
		};
		this.frame = true;
		this.width = 800;
		this.height = 600;
		this.style = {
	        marginLeft: 'auto',
	        marginRight: 'auto'
	    };
	    this.items = [
			{
				region: 'north',
			    xtype: 'toolbar',
			    split: true,
			    items: [{
			        text: 'Sign In',
			        scope: this,
			        handler: this.signIn
			    }, {
			        text: 'Register',
			        scope: this,
			        handler: this.register
			    }]
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
	            items: [
	                {xtype: 'agencyInfo', id: 'agencyInfoPanel'},
	                {xtype: 'agencyUsers'}
		        ]
	        }
	    ];
		this.callParent(arguments);
	}
});