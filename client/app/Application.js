Ext.define('AbhayaApp.Application', {
    extend: 'Ext.app.Application',
    name: 'AbhayaApp',
    stores: [
        'NavigationTree'
    ],

    //defaultToken : 'dashboard',

    // The name of the initial view to create. This class will gain a "viewport" plugin
    // if it does not extend Ext.Viewport.
    //
    //mainView: 'AbhayaApp.view.main.Main', 
    launch: function () 
    {
    	var loggedIn = localStorage.getItem("LoggedIn");
    	if (loggedIn)
		{
    		 Ext.create('AbhayaApp.view.main.Main',{
    	        });
		}
    	else
    	{
    		Ext.create('AbhayaApp.view.login.Login',{
            });
    	}
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
