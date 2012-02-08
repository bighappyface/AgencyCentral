Ext.define('AgencyCentral.store.Agencies', {
	extend: 'Ext.data.Store',
	model: 'AgencyCentral.model.Agency',
	proxy: {
        type: 'rest',
        url: '/agency/list'
	}
});