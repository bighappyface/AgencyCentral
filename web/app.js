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
            items: [
                {
                    xtype: 'frontMain',
                }
            ]
        });
    }
});