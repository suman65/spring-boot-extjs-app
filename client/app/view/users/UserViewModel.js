Ext.define('AbhayaApp.view.users.UserViewModel', 
{
     extend	: 'Ext.app.ViewModel'
    ,alias	: 'viewmodel.userviewmodel'
    ,stores : 
    {
        allUsersResults: 
        {
            type : 'userstore'
        }
    }
});
