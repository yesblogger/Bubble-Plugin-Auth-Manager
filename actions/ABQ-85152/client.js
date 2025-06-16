function(properties, context) {
    const credentials = {
        email: properties.email,
        otp: properties.otp
    };

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
