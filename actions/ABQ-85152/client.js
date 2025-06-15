function(properties, context) {

  	//Load any data
    const credentials = {
        email: properties.email,
        otp: properties.otp
    };

    // Do the operation
    return window.AuthManager.otplogin(credentials);

}