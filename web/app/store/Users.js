Ext.define('AgencyCentral.store.Users', {
	extend: 'Ext.data.Store',
	model: 'AgencyCentral.model.User',
	data: [
  	    {id: 1, name: 'David', email: 'anomalous20@gmail.com'},
	    {id: 2, name: 'Melissa', email: 'misajane@gmail.com'}
	]
});