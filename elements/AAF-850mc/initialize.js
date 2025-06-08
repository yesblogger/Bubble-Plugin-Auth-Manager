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
        publish('is_logged_in', false);
        publish('custom_response', null);

        trigger('auth_user_is_logged_out');
    };

    data.set_user = function(user) {
        publish('token', localStorage.getItem(TOKEN_STORAGE_KEY));
        publish('first_name', user.nameFirst);
        publish('last_name', user.nameLast);
        publish('email', user.email);
        publish('custom_response', user.customResponse);
        publish('is_logged_in', true);

        trigger('auth_user_is_logged_in');
    };

    data.error = function(message, statusCode) {
        context.reportDebugger(message);

        publish('error_message', message);
        publish('status_code', statusCode);
        trigger('auth_threw_error');
    };
}