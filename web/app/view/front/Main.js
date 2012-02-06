Ext.define('AgencyCentral.view.front.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.frontMain',
	id: 'frontMain',
	renderTo: Ext.getBody(),
	initComponent: function() {
		this.title = 'Agency Central';
		this.layout = {
			type: 'border',
			align: 'stretch'
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
			    id: 'topToolbar',
			    split: true,
			    items: [{
			        text: 'Login',
			        id: 'loginButton',
			        scope: this,
			        handler: this.showLogin,
			        iconCls: 'icon-lock'
			    }, {
			        text: 'Register',
			        id: 'registerButton',
			        scope: this,
			        handler: this.showRegister,
			        iconCls: 'icon-user-add'
			    }, {
			        text: 'Logout',
			        id: 'logoutButton',
			        scope: this,
			        handler: this.showLogout,
			        iconCls: 'icon-disconnect',
			        hidden: true
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
	},
	showLogout: function() {
		Ext.Msg.show({
		    title:'Logout?',
		    msg: 'Are you sure you want to logout?',
		    buttons: Ext.Msg.YESNO,
		    icon: Ext.Msg.QUESTION,
		    fn: function(btn, text) {
				if(btn == 'yes'){
					Ext.getCmp('frontController').logout();
				}
				return false;
			}
		});
	},
	arrangeToolbar: function(user) {
		if(user){
			Ext.get('loginButton').hide();
			Ext.get('registerButton').hide();
			Ext.get('logoutButton').show();
		}else{
			Ext.get('loginButton').show();
			Ext.get('registerButton').show();
			Ext.get('logoutButton').hide();
		}
	}
});