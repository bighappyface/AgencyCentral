Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

Ext.Loader.onReady(function() {
	Ext.define('Agency', {
	    extend: 'Ext.data.Model',
	    fields: ['id', 'name', 'address', 'state']
	});
	
	Ext.define('App.AgencyStore', {
        extend: 'Ext.data.Store',
        model: 'Agency',
    	proxy: {
            type: 'ajax',
            url: 'js/json/agencies.json'
        }
    });
	
	Ext.define('App.AgencyGrid', {
	    extend: 'Ext.grid.Panel',
	    alias: 'widget.agencygrid',
	    title: 'Agencies',
	    initComponent : function() {

	        this.store = new App.AgencyStore({
	            storeId: 'gridAgencyStore'
	        });
	        this.callParent();
	    },
	    columns: [
	        { flex:  1,  header: "Name", sortable: true, dataIndex: 'name'}
	    ]
	 });
	 
	 Ext.define('App.AgencyDetail', {
        extend: 'Ext.Panel',
        title: 'Information',
        alias: 'widget.agencydetail',
        tplMarkup: [
            'ID: {id}',
            'Name: {name}<br/>'
        ],
        startingMarkup: 'Please select an agency for details',

        bodyPadding: 7,
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
	 
	 Ext.define('App.AgencyTabs', {
	        extend: 'Ext.tab.Panel',
	        alias: 'widget.agencytabs',
	        activeTab: 0,
	        items: [
		        {
	                xtype: 'agencydetail',
	            }
		    ]
	    });
	
	Ext.define('App.AgencyMasterDetail', {
        extend: 'Ext.Panel',
        alias: 'widget.agencymasterdetail',

        height: 500,
        layout: 'border',
        bodyPadding: '5',
        initComponent: function() {
            this.items = [{
                xtype: 'agencygrid',
                itemId: 'gridPanel',
                region: 'west',
                width: '33%',
                split: true
            },{
                xtype: 'agencytabs',
                itemId: 'tabPanel',
                region: 'center'
            }];
            this.callParent();
        },
        initEvents: function() {
            this.callParent();
            var bookGridSm = this.getComponent('gridPanel').getSelectionModel();
            ('selectionchange', function(sm, rs) {
            if (rs.length) {
                var detailPanel = Ext.getCmp('detailPanel');
                bookTpl.overwrite(detailPanel.body, rs[0].data);
            }
        });
            bookGridSm.on('selectionchange', this.onRowSelect, this);
        },
        onRowSelect: function(sm, rs) {
            if (rs.length) {
                var detailPanel = this.getComponent('detailPanel');
                detailPanel.updateDetail(rs[0].data);
            }

        }
    });
	
}, false);


Ext.onReady(function() {
    new App.AgencyMasterDetail({
        renderTo: 'agency-central'
    });
    Ext.data.StoreManager.get('gridAgencyStore').load();
});