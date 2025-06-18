function(instance, context) {

    let data = instance.data,
        publish = instance.publishState,
        trigger = instance.triggerEvent;

    const i = instance,
          c = context;

    bubbleInstances.push(instance);

    data.log_out = function() {
        publish('token', '');
        publish('first_name', '');
        publish('email', '');
        publish('last_name', '');
        publish('id', '');
        publish('is_logged_in', false);
        publish('custom_response', null);

        trigger('auth_user_is_logged_out');
        console.debug('[AuthManager] log_out called');
    };

    data.set_user = function(user, statusCode, is_logged_in) {
        publish('token', localStorage.getItem(TOKEN_STORAGE_KEY));
        publish('first_name', user.first_name);
        publish('last_name', user.last_name);
        publish('id', user.id);
        publish('email', user.email);
        publish('custom_response', user.custom_response);
        publish('is_logged_in', is_logged_in);
        publish('status_code', statusCode);
        if (is_logged_in) { 
            trigger('auth_user_is_logged_in');
        }
        console.debug('[AuthManager] set_user called');
    };

    data.error = function(message, statusCode) {
        context.reportDebugger(message);

        publish('error_message', message);
        publish('status_code', statusCode);
        trigger('auth_threw_error');
        console.debug('[AuthManager] error called');
    };

    initializeAuth();
}