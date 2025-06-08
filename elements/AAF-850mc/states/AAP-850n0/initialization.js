function initializeState_first_name(properties, context) {
    try {
        const userData = JSON.parse(localStorage.getItem(USER_DATA) || '{}');
        return userData.nameFirst || '';
    } catch(err) {
        return '';
    }
}