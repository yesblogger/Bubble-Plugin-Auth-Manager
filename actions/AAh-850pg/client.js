function(properties, context) {
    const credentials = {
        email: properties.email,
        password: properties.password
    };

    if (Array.isArray(properties.additional_fields)) {
        properties.additional_fields.forEach(field => {
            credentials[field.key] = field.value;
        });
    }

    return window.AuthManager.login(credentials)
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
            throw new Error(error.message || 'Login failed');
        });
}