Ext.define('AbhayaApp.view.main.Main',
{					
	extend 		: 'Ext.container.Viewport',
	xtype 		: 'app-main',
	requires 	: ['Ext.button.Segmented', 'Ext.list.Tree' ],
	controller 	: 'main',
	viewModel 	: 'main',
	cls 		: 'sencha-dash-viewport',
	itemId 		: 'mainView',
	layout 		: { type : 'vbox'	,align : 'stretch'},
	listeners 	: {	render : 'onMainViewRender'},
	items 		: 
	[
		{
			xtype 	: 'toolbar',
			cls 	: 'sencha-dash-dash-headerbar shadow',
			height  : 64,
			itemId  : 'headerBar',
			items   : 
			[
				{
					xtype 		: 'component',
					reference 	: 'senchaLogo',
					cls 		: 'sencha-logo',
					html 		: '<div class="main-logo"><img src="resources/images/favicon.png">ABHAYA</div>',
					width 		:  250
				},
				{
					margin 		: '0 0 0 8',
					ui 			: 'header',
					iconCls 	: 'x-fa fa-navicon',
					id 			: 'main-navigation-btn',
					handler 	: 'onToggleNavigationSize'
				},
				{
					xtype		: 'component',
					margin 		: '0 0 0 8',
					ui 			: 'header',
					html 		: '<img src="resources/images/logo-final.jpg" height=50px width=200px>',
				},
				'->',
				{
					xtype 		: 'tbtext',
					text 		: 'Suman Tipparapu',
					cls 		: 'top-user-name'
				},
				{
					xtype 		: 'image',
					cls 		: 'header-right-profile-image',
					height 		: 35,
					width 		: 35,
					alt 		: 'current user image',
					src 		: 'resources/images/user-profile/2.png'
				} 
			]
		},
		{
			xtype 	  : 'maincontainerwrap',
			id 		  : 'main-view-detail-wrap',
			reference : 'mainContainerWrap',
			flex 	  : 1,
			items 	  : 
			[
				{
					xtype 			: 'treelist',
					reference 		: 'navigationTreeList',
					itemId 			: 'navigationTreeList',
					ui 				: 'navigation',
					store 			: 'NavigationTree',
					width 			:  250,
					expanderFirst 	:  false,
					expanderOnly 	:  false,
					listeners 		: 
					{
						selectionchange : 'onNavigationTreeSelectionChange'
					}
				},
				{
					xtype 			: 'container',
					flex 			:  1,
					reference 		: 'mainCardPanel',
					cls 			: 'sencha-dash-right-main-container',
					itemId 			: 'contentPanel',
					layout 			: 
					{
						type 		: 'card',
						anchor 		: '100%'
					}
				}
			]
		} 
	]
});
