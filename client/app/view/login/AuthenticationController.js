Ext.define('AbhayaApp.view.login.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',
    onLoginButton: function() 
    {
    	var me = this;
    	this.getView().up('window').close();
        localStorage.setItem("LoggedIn",true);
        Ext.create('AbhayaApp.view.main.Main',{
        });
    }
});