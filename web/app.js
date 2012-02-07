Ext.Loader.setConfig({enabled:true});
Ext.application({
    name: 'AgencyCentral',
    appFolder: 'app',
    controllers: [
        'Front',
        'User',
        'Agency',
    ],
    launch: function() {
    	Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            padding: '25 0 0 0',
            items: [
                {
                    xtype: 'frontMain',
                }
            ]
        });
    }
});