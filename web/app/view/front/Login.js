Ext.define('AgencyCentral.view.front.Login', {
    extend: 'Ext.window.Window',
    alias : 'widget.frontLogin',
    title : 'Login',
    layout: 'fit',
    modal: true,
    draggable: false,
    autoShow: true,
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                bodyPadding: 10,
                border: false,
                items: [
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Email',
                        vtype: 'email',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'password',
                        fieldLabel: 'Password',
                        inputType: 'password',
                        allowBlank: false
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: 'Login',
                action: 'login'
            }
        ];
        this.callParent(arguments);
    }
});