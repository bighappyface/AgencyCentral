Ext.define('AgencyCentral.view.front.Toolbar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.frontToolbar',
	items: [{
        text: 'Login',
        id: 'loginButton',
        iconCls: 'icon-lock',
        hidden: true
    }, {
        text: 'Register',
        id: 'registerButton',
        scope: this,
        iconCls: 'icon-user-add',
        hidden: true
    }, {
        text: 'Logout',
        id: 'logoutButton',
        scope: this,
        iconCls: 'icon-disconnect',
    }]
});