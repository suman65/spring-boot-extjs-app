Ext.define('AbhayaApp.model.users.UserModel', {
    extend : 'Ext.data.Model',
    fields : [
    			{ name : 'id' ,mapping : 'prepaidMeterUserId' },
    			{ name : 'firstName'						  },
    			{ name : 'lastName'							  },
    			{ name : 'mobileNumber'						  },
    			{ name : 'email'							  }
    		 ]
});
