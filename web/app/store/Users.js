Ext.define('AgencyCentral.store.Users', {
	extend: 'Ext.data.Store',
	model: 'AgencyCentral.model.User',
	proxy: {
        type: 'ajax',
        url: '/user/list',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});