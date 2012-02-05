Ext.define('AgencyCentral.view.agency.Info', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.agencyInfo',
	title: 'Details',
	tplMarkup: [
        'Id: {id}<br/>',
        'Name: {name}<br/>'
    ],
    startingMarkup: 'Please select an agency to see details',
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