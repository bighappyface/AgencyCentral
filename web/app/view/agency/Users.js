Ext.define('AgencyCentral.view.agency.Users', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.agencyUsers',
	title: 'Users',
	layout: 'border',
	bodyPadding: 5,
	initComponent: function() {
        this.items = [{
        	region: 'north',
            xtype: 'userList',
            split: true,
        },{
        	region: 'center',
            xtype: 'userInfo',
            id: 'userInfoPanel'
        }];
        this.callParent(arguments);
    }
});