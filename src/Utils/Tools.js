const LOGIN = 'login';

export const login = () => {
    localStorage.setItem(LOGIN, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(LOGIN);
}

export const isLogin = () => {
    if (localStorage.getItem(LOGIN)) {
        return true;
    }

    return false;
}