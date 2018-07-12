Ext.define('AbhayaApp.common.GridStore',
{
	extend		 : 'Ext.data.Store'
	,alias		 : 'store.gridstore'
	,pageSize	 : 20
	,autoLoad 	 : false
	,autoDestroy : true
	,remoteSort	 : true
	,remoteFilter: true
});