Ext.define('AbhayaApp.common.JsonReader',
{
	extend			: 'Ext.data.reader.Json'
	,alias 			: 'reader.jsonreader'
	,keepRawData	: false
	,rootProperty	: 'content'
	,totalProperty	: 'page.totalElements'
	,successProperty: 'success'
	,messageProperty: 'message'
});