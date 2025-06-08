function initializeState_token(properties, context) {
    try {
        return localStorage.getItem(TOKEN_STORAGE_KEY) || '';
    } catch(err) {
        return '';
    }
}