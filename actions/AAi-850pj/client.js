function(properties, context) {

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
    return window.AuthManager.signup(userData);

}