Ext.define('AbhayaApp.view.main.MainContainerWrap', 
{
    extend	 	: 'Ext.container.Container',
    xtype	 	: 'maincontainerwrap',
    requires 	: ['Ext.layout.container.HBox'],
    scrollable	: 'y',
    layout		: 
    {
        type	: 'hbox',
        align	: 'stretchmax',
        animate	: true,
        animatePolicy: 
        {
            x		: true,
            width	: true
        }
    },
    beforeLayout : function() 
    {
        // We setup some minHeights dynamically to ensure we stretch to fill the height
        // of the viewport minus the top toolbar
        var me = this,
        height = Ext.Element.getViewportHeight() - 64,  // offset by topmost toolbar height
            // We use itemId/getComponent instead of "reference" because the initial
            // layout occurs too early for the reference to be resolved
        navTree = me.getComponent('navigationTreeList');
        me.minHeight = height;
        navTree.setStyle({
            'min-height': height + 'px'
        });
        me.callParent(arguments);
    }
});
