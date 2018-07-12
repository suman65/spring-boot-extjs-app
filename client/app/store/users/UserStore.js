Ext.define('AbhayaApp.store.users.UserStore', 
{
     extend	  : 'AbhayaApp.common.GridStore'
    ,alias	  : 'store.userstore'
    ,model	  : 'AbhayaApp.model.users.UserModel'
    ,autoLoad : true
    ,proxy 	  : 
     {
		 type		 : 'ajax'
		,url 		 :  baseURL + 'prepaidMeterUser'
		,startParam  : 'page'
		,method		 : 'GET'
		,limitParam  : 'size'
		,reader		 :  'jsonreader'
	 }
});
