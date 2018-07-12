Ext.define('AbhayaApp.common.CustomForm', 
{
    extend 			: 'Ext.form.Panel'
    ,alias			: 'widget.customform'
    ,margin 		:  20
    ,width 			: '100%'
    ,cls 			: 'x-emp-personl-form'
    ,header 		: {xtype : 'header' ,style : 'background-color:#fff;border-bottom : 1px solid #ccc;'}
	,viewReadOnly	: false
	,initComponent	: function()
	 {
			var me = this,
			fieldDefaults = 
			{
				labelAlign		: 'left'
				,labelWidth		: 120
				,anchor			: '100%'
				,labelStyle		: 'font-weight:bold;'
				,labelSeparator	: ''
			};
			if (me.fieldDefaults)
			{
				Ext.applyIf(me.fieldDefaults, fieldDefaults);
			}
			else
			{
				me.fieldDefaults = fieldDefaults;
			}
			if (me.viewReadOnly)
			{
				me.on({
					afterrender: me.makeReadOnly
					,scope: me
					,single: true
				});
			}
			me.callParent(arguments);
	 	}
		,makeReadOnly: function()
		{
			var fields = this.query('field[isFormField]');
			for (var i = 0, len = fields.length; i < len; i++)
			{
				fields[i].setReadOnly(true);
			}
		}
		,loadRecord: function(record)
		{
			this.setLoading(true);
			this.callParent(arguments);
			this.setLoading(false);
		}
});