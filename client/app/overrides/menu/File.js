Ext.define('AbhayaApp.override.menu.File', {
    override: 'Ext.form.field.Base',

    privates: 
    {
    	getFieldLabel: function()
    	{
    		var label = this.callParent(arguments);
    		return label = (label && this.allowBlank === false) ? label + '<font style = "color:red; font-weight : bold; font-size:18px;"> *</font>' : label;;
    	}
    }
});
