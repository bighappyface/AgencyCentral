Ext.require([
	'Ext.tree.*',
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
        extend: 'Ext.data.TreeStore',
        constructor: function(config) {
            config = config || {};

            config.model = 'Agency';
            config.proxy = {
                type: 'ajax',
                url: 'js/json/agencyTree.json'
            };
            config.sorters =  [{
                property: 'id',
                direction: 'ASC'
            }, {
                property: 'name',
                direction: 'ASC'
            }]
            this.callParent([config]);
        }
    });
	
	Ext.define('App.AgencyGrid', {
	    extend: 'Ext.tree.Panel',
	    alias: 'widget.agencygrid',
	
	    initComponent : function() {

	        this.store = new App.AgencyStore({
	            storeId: 'gridAgencyStore',
	            url: 'js/json/agencyTree.json'
	        });
	        this.callParent();
	     }
	 });
	 
	 Ext.define('App.AgencyDetail', {
        extend: 'Ext.Panel',
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
	
	Ext.define('App.AgencyMasterDetail', {
        extend: 'Ext.Panel',
        alias: 'widget.agencymasterdetail',

        frame: true,
        title: 'Agency List',
        height: 500,
        layout: 'border',
        initComponent: function() {
            this.items = [{
                xtype: 'agencygrid',
                itemId: 'gridPanel',
                region: 'west',
                width: '33%',
                height: 500,
                rootVisible: false,
                split: true
            },{
                xtype: 'agencydetail',
                itemId: 'detailPanel',
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
        })
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
    // create an instance of the app
    var agencyApp = new App.AgencyMasterDetail({
        renderTo: 'agency-central'
    });
    Ext.data.StoreManager.get('gridAgencyStore').load();
});