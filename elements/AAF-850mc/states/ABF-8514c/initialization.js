function initializeState_custom_response(properties, context) {

	try {
        const userData = JSON.parse(localStorage.getItem(USER_DATA) || '{}');
        return userData.customResponse || null;
    } catch(err) {
        return null;
    }

}