Ext.define('AbhayaApp.store.combo.UserComboStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.usercombostore'
    ,autoLoad	: true
    ,fields 	: [{name : "id"},{name : "name"}]
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  baseURL + 'comboData?actionType=usersService'
		,startParam  : 'page'
		,limitParam  : 'size'
		,reader		 : 
		 {
		     type		     : 'json'
		    ,rootProperty    : 'records'
            ,successProperty : 'success'
	     }
	 }
});
