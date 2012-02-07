Ext.define('AgencyCentral.model.User', {
	extend: 'Ext.data.Model',
	fields: ['id','name','email','agency','allowEdit'],
	proxy: {
        type: 'ajax',
        url : '/user'
    }
});