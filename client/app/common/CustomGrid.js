Ext.define('AbhayaApp.common.CustomGrid', 
 {
     extend		: 'Ext.grid.Panel'
    ,alias		: 'widget.customgrid'
    ,margin		: 20
    ,cls		: 'pages-faq-container shadow'
    ,requires	: 
    [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ]
	,scrollable		: true
	,columnLines	: true
	,forceFit 		: true
	,pagination 	: true
	,emptyText		: 'No Data Available'
	,header			: {xtype :'header'	,titleAlign : 'center'	}
	,applyFilter    : true
	,applyColTooltip : true
	,initComponent  : function()
	{
		var me = this;
		if (Ext.isArray(me.columns))
		{
			Ext.Array.each(me.columns, function(column)
			{
				if (column.hasOwnProperty('columns'))
				{
					Ext.Array.each(column.columns, function(col)
					{
						if (me.applyFilter)		Ext.applyIf(col, {filter: {type: 'string'}});
					});
				}
				else
				{
					if (me.applyFilter)		Ext.applyIf(column, {filter: {type: 'string'}});
				}
			});
		}
		if (me.applyFilter)
		{
			//me.applyPlugin({ptype: 'gridfilters'});
			me.plugin = {ptype: 'gridfilters'};
		}
		if (me.applyColTooltip)
		{
			me.plugin = {ptype: 'gridcolumntooltip'};
		}
		if (me.pagination == true)
		{
			me.dockedItems	= 
			{
				xtype		: 'pagingtoolbar'
				,bind		:  me.viewModel
				,dock		: 'bottom'
				,displayInfo:  true
				,displayMsg	: '<b>Displaying Records {0} - {1} of {2} </b>'
				,emptyMsg	: '<b>No Records to Display</b>'
				,plugins	: Ext.create('Ext.ux.ProgressBarPager', { cls :'paging-bar-progress'})
				,listeners	: 
				{
                    beforechange: function (page, currentPage) 
                    {
                        var myProxy = this.store.getProxy();                        
                        myProxy.setExtraParam('page', currentPage-1);
                    }
                }
			}
		}
		me.callParent(arguments);
	}
});
