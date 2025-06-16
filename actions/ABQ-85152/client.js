function(properties, context) {
    const credentials = {
        email: properties.email,
        otp: properties.otp
    };

    console.log('Starting OTP login action'); // add at top of client.js

    return window.AuthManager.otplogin(credentials)
    .then(data => {
        console.log('OTP login success:', data); // already there
        return data;
    })
    .catch(error => {
        console.error('OTP login error:', error.message); // important for tracing
        throw new Error(error.message || 'OTP Login failed');
    });

}
