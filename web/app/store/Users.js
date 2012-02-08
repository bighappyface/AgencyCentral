Ext.define('AgencyCentral.store.Users', {
	extend: 'Ext.data.Store',
	model: 'AgencyCentral.model.User',
	proxy: {
        type: 'rest',
        url: '/agency',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});