function initializeState_email(properties, context) {
    try {
        const userData = JSON.parse(localStorage.getItem(USER_DATA) || '{}');
        return userData.id || '';
    } catch(err) {
        return '';
    }
}