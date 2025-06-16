function(properties, context) {
    const userData = {
        email: properties.email,
        password: properties.password,
        nameFirst: properties.first_name,
        nameLast: properties.last_name
    };

    if (Array.isArray(properties.additional_fields)) {
        properties.additional_fields.forEach(field => {
            userData[field.key] = field.value;
        });
    }

    return window.AuthManager.signup(userData)
        .then(data => {
            return {
                first_name: data.user.first_name,
                last_name: data.user.last_name,
                email: data.user.email,
                id: data.user.id
            };
        })
        .catch(error => {
            throw new Error(error.message || 'Signup failed');
        });
}