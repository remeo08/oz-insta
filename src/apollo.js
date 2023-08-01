import { makeVar } from '@apollo/client';

export const isUserLoggedIn = makeVar(false);

export const userLoggedIn = () => {
    //localstorage.setItem(ACCESS_TOKEN, data.access);
    //localstorage.setItem(REFRESH_TOKEN, data.refresh);
    isUserLoggedIn(true);
};

export const userLoggedOut = () => {
    //localstorage.removeItem(ACCESS_TOKEN);
    //localstorage.removeItem(REFRESH_TOKEN);
    //localstorage.clear();

    isUserLoggedIn(false);
};
