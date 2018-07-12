Ext.define('AbhayaApp.store.combo.RolesStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.rolesstore'
    ,autoLoad	: false
    ,fields 	: [{name : "id"},{name : "name"}]
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  baseURL + 'comboData?actionType=rolesService'
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
