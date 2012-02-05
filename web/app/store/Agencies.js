Ext.define('AgencyCentral.store.Agencies', {
	extend: 'Ext.data.Store',
	model: 'AgencyCentral.model.Agency',
	proxy: {
        type: 'ajax',
        url: '/agency/list',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});