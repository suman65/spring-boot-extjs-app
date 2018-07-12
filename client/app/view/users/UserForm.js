Ext.define('AbhayaApp.view.users.UserForm', 
{
    extend 		: 'AbhayaApp.common.CustomForm'
    ,alias		: 'widget.userdetailsform'
    ,title 		: 'User Details'
    ,layout 	: {type : 'hbox' }
	,itemId		: 'userDetailsForm'
	,controller : 'usergridcontroller'
	,margin  : 0
    ,items		:
     [
	      {
	         xtype			: 'fieldset'
	        ,border  		:  false
	        ,width 			: '50%'
	        ,style   		: 'background-color:#fff;'
	        ,fieldDefaults  : 
	         {
	             labelWidth	    	: 150
	            ,labelAlign			: 'left'
	            ,labelSeparator  	: ''
	            ,submitEmptyText 	: false
	            ,anchor 			: '90%'
	            ,margin 			: 15
	         }
            ,items: 
             [
            	 
            	  {
            		  xtype 		: 'textfield'
                     ,fieldLabel    : 'First Name'
                     ,name			: 'firstName'
                     ,allowBlank 	:  false
                  }
                 ,{
                	  xtype 		: 'textfield'
                     ,fieldLabel    : 'Last Name'
                     ,name			: 'lastName'
                     ,allowBlank 	: false
                 }
                ,{
           		  	 xtype 			: 'numberfield'
                    ,fieldLabel     : 'Mobile Number'
                    ,name			: 'mobileNumber'
                    ,allowBlank 	: false
                    ,maxLength		: 10
                	,minValue		: 0
                	,mouseWheelEnabled: false
                	,hideTrigger	: true
                 }
                ,{
              	     xtype 			: 'textfield'
                    ,fieldLabel     : 'User Name'
                    ,name			: 'username'
                    ,allowBlank 	: false
                 }
                ,{
             	     xtype 			: 'textfield'
                    ,fieldLabel     : 'Password'
                    ,name			: 'password'
                    ,allowBlank 	: false
                 }
                ,{
               	     xtype 			: 'textfield'
                    ,fieldLabel     : 'Email Id'
                    ,name			: 'emailId'
                    ,vtype			: 'email'
                    ,allowBlank 	: false
                }
            ]
        },
        {
    		 xtype			: 'customgrid'
	        ,border  		:  false
	        ,width 			: '50%'
	        ,margin 		: 15
	        ,pagination		: false
	        ,header			: false
	        ,style   		: 'background-color:#fff;'
	        ,store			:  { type : 'rolesstore'}
        	,selModel		:  { selType: 'checkboxmodel'}
            ,columns		: 
             [
            	 { text : 'Role Id'      ,dataIndex : 'id'		}
            	,{ text : 'Role Name'	 ,dataIndex : 'name'	}
             ]
        }
     ]
	,buttonAlign : 'right'
	,buttons  : [ {xtype : 'button' ,text  : 'Save'  ,iconCls : 'x-fa fa-save'  ,formBind : true}]
});