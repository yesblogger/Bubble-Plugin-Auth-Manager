function initializeState_is_logged_in(properties, context) {
    try {
        const token = localStorage.getItem(TOKEN_STORAGE_KEY);
        return !!token; // Returns true if token exists
    } catch(err) {
        return false;
    }
}