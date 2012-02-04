Ext.Loader.setConfig({enabled:true});
Ext.application({
    name: 'AgencyCentral',
    appFolder: 'app',
    controllers: [
        'Front',
        'Agency',
        'Users'
    ],
    launch: function() {
    	
    }
});