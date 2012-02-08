Ext.define('AgencyCentral.model.Agency', {
	extend: 'Ext.data.Model',
	fields: ['id','name','email','url','phone','address','city','state','zip','users','allowEdit'],
	proxy: {
        type: 'rest',
        url : '/agency'
    }
});