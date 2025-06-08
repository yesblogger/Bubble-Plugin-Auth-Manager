function initializeState_last_name(properties, context) {
    try {
        const userData = JSON.parse(localStorage.getItem(USER_DATA) || '{}');
        return userData.nameLast || '';
    } catch(err) {
        return '';
    }
}