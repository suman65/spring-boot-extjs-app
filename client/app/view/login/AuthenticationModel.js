Ext.define('AbhayaApp.view.login.AuthenticationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.authentication',

    data: {
        userid : '',
        fullName : '',
        password : '',
        email    : '',
        persist: false,
        agrees : false
    }
});