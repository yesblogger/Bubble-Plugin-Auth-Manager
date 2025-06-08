function(properties, context) {

    //Load any data
    const credentials = {
        email: properties.email,
        password: properties.password
    };

    // Add any additional fields if provided
    if (properties.additional_fields && Array.isArray(properties.additional_fields)) {
        properties.additional_fields.forEach(field => {
            credentials[field.key] = field.value;
        });
    }

    // Do the operation
    return window.AuthManager.login(credentials)
        .then(data => {
            return {
                auth_token: data.token,
                first_name: data.user.nameFirst,
                last_name: data.user.nameLast,
                email: data.user.email
            };
        });

}