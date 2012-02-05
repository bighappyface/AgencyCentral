Ext.define('AgencyCentral.view.user.Info', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.userInfo',
	tplMarkup: [
        'Id: {id}<br/>',
        'Name: {name}<br/>'
    ],
    startingMarkup: 'Please select a user to see details',
    bodyPadding: 5,
	initComponent: function() {
		this.tpl = Ext.create('Ext.Template', this.tplMarkup);
        this.html = this.startingMarkup;
        this.bodyStyle = {
            background: '#ffffff'
        };
        this.callParent();
	},
    updateDetail: function(data) {
        this.tpl.overwrite(this.body, data);
    }
});