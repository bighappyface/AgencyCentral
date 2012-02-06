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
		Ext.getCmp('frontMain').checkLogin();
    }
});