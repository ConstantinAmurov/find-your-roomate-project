export const SUCCESS_NOTIFICATION = 'SUCCESS_NOTIFICATION ';
export const ERROR_NOTIFICATION = 'ERROR_NOTIFICATION ';
export const RESET_NOTIFICATION = 'RESET_NOTIFICATION';

export const successNotification = (payload) => ({ type: SUCCESS_NOTIFICATION, payload });

export const errorNotification = (payload) => ({ type: ERROR_NOTIFICATION, payload });

export const resetNotification = (payload) => ({ type: RESET_NOTIFICATION, payload });