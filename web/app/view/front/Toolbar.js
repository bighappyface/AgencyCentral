Ext.define('AgencyCentral.view.front.Toolbar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.frontToolbar',
	items: [{
        text: 'Login',
        id: 'loginButton',
        iconCls: 'icon-lock',
        hidden: true
    }, {
        text: 'Register User',
        id: 'registerButton',
        iconCls: 'icon-user-add',
        hidden: true
    }, {
        text: 'Logout',
        id: 'logoutButton',
        iconCls: 'icon-disconnect',
    },
    { xtype: 'tbseparator' },
    {
    	xtype: 'tbtext',
    	id: 'toolbarText',
    }]
});