function(properties, context) {

    // Check if AuthManager is available
    if (!window || !window.AuthManager) {
        throw new Error('Auth Manager not initialized. Please ensure the plugin is properly loaded.');
    }
    
    //Load any data
    const userData = {
        email: properties.email,
        password: properties.password,
        nameFirst: properties.first_name,
        nameLast: properties.last_name
    };

    // Add any additional fields if provided
    if (properties.additional_fields && Array.isArray(properties.additional_fields)) {
        properties.additional_fields.forEach(field => {
            userData[field.key] = field.value;
        });
    }

    // Do the operation
    return window.AuthManager.signup(userData)
        .then(data => {
            return {
                // auth_token: data.token,
                first_name: data.user.nameFirst,
                last_name: data.user.nameLast,
                email: data.user.email,
                id: data.user.id
            };
        });
    
}