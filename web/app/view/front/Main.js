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
			        text: 'Login',
			        scope: this,
			        handler: this.showLogin
			    }, {
			        text: 'Register',
			        scope: this,
			        handler: this.showRegister
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
	            id: 'agencyTabs',
	            items: [
	                {xtype: 'agencyInfo', id: 'agencyInfoPanel'},
	                {xtype: 'agencyUsers', id: 'agencyUsersPanel', hidden: true}
		        ]
	        }
	    ];
		this.callParent(arguments);
	},
	showLogin: function(button, data) {
		Ext.widget('frontLogin').show();
	},
	showRegister: function(button, data) {
		Ext.widget('userRegister').show();
	}
});