Ext.define('AgencyCentral.controller.Front', {
	extend: 'Ext.app.Controller',
	id: 'frontController',
	stores: ['Agencies','Users'],
	models: ['FieldError','Login','Logout'],
	views: [
	    'front.Main',
	    'front.Toolbar',
	    'front.Login',
	    'user.Register'
	],
	init: function() {
		this.checkLogin();
		this.control({
			'#loginButton': {
				click: this.showLogin
			},
			'#logoutButton': {
				click: this.showLogout
			},
			'#registerButton': {
				click: this.showRegister
			},
			'#userLoginWindow': {
				close: this.checkLogin
			},
			'#userRegisterWindow': {
				close: this.checkLogin
			}
		});
		this.addEvents('resetUserDetails');
	},
	checkLogin: function() {
		var c = this;
		this.getModel('Login').load(0, {
			success: function(model) {
				c.getAgenciesStore().load();
				c.arrangeToolbar( model.get('user') );
			}
		});
	},
	logout: function() {
		this.fireEvent('resetUserDetails');
		var c = this;
		this.getModel('Logout').load(0, {
			success: function(model) {
				c.checkLogin();
			}
		});
	},
	showLogin: function(button) {
		Ext.widget('frontLogin').show();
	},
	showRegister: function(button, data) {
		Ext.widget('userRegister').show();
	},
	showLogout: function() {
		var c = this;
		Ext.Msg.show({
		    title:'Logout?',
		    msg: 'Are you sure you want to logout?',
		    buttons: Ext.Msg.YESNO,
		    icon: Ext.Msg.QUESTION,
		    fn: function(btn, text) {
				if(btn == 'yes'){
					c.logout();
				}
				return false;
			}
		});
	},
	arrangeToolbar: function(user) {
		if(user){
			Ext.getCmp('loginButton').hide();
			Ext.getCmp('registerButton').hide();
			Ext.getCmp('logoutButton').show();
			Ext.getCmp('toolbarText').setText('Logged in as: ' + user.name);
		}else{
			Ext.getCmp('loginButton').show();
			Ext.getCmp('registerButton').show();
			Ext.getCmp('logoutButton').hide();
			Ext.getCmp('toolbarText').setText('Please Login or Register');
		}
	}
});