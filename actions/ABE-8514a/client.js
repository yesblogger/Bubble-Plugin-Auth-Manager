function(properties, context) {
    return window.AuthManager.verify()
        .then(isValid => {
            if (!isValid) {
                throw new Error('Token verification failed');
            }
            return {}; // No values to return
        })
        .catch(error => {
            throw new Error(error.message || 'Token verification failed');
        });
}