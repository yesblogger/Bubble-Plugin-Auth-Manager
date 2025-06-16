function(properties, context) {

    //Load any data
    const credentials = {
        email: properties.email,
        otp: properties.otp
    };

    // Do the operation
    return window.AuthManager.otplogin(credentials)
        .then(data => {
            return {
                auth_token: data.access,
                first_name: data.user.first_name,
                last_name: data.user.last_name,
                email: data.user.email,
                id: data.user.id
            };
        })
        .catch(error => {
            throw new Error(error.message || 'OTP Login failed');
        });

}