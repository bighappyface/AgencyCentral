Ext.define('AgencyCentral.model.Login', {
    extend: 'Ext.data.Model',
    fields: ['user'],
    proxy: {
        type: 'ajax',
        url : '/user/login-check'
    }
});