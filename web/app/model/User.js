Ext.define('AgencyCentral.model.User', {
	extend: 'Ext.data.Model',
	fields: ['id','agency','name','email','phone','address','city','state','zip',,'allowEdit'],
	proxy: {
        type: 'rest',
        url : '/user'
    }
});