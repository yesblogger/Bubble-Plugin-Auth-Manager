function(properties, context) {

    // Do the operation
    return window.AuthManager.verify()
        .then(isValid => {
            if (!isValid) {
                throw new Error('Token verification failed');
            }
            return {};
        });

}