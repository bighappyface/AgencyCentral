Ext.define('AgencyCentral.model.Logout', {
    extend: 'Ext.data.Model',
    fields: ['success'],
    proxy: {
        type: 'ajax',
        url : '/user/logout'
    }
});