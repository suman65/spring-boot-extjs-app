Ext.define('AbhayaApp.store.NavigationTree', 
{
     extend	 : 'Ext.data.TreeStore'
    ,storeId : 'NavigationTree'
    ,fields	 :  [{ name: 'text' }]
    ,root	 : 
     {
        expanded	: true
       ,children	: 
        [
          {
             text	  	: 'Dashboard'
            ,iconCls  	: 'x-fa fa-desktop'
            ,rowCls   	: 'nav-tree-badge'
            ,viewType 	: 'admindashboard'
            ,routeId  	: 'dashboard'
            ,leaf	  	:  true
          }
         ,{
             text		: 'Users'
            ,iconCls	: 'x-fa fa-user'
            ,rowCls		: 'nav-tree-badge'
            ,viewType	: 'userdetails'
            ,routeId	: 'userdetails'
            ,leaf		:  true
          }
        ]
    }
});
