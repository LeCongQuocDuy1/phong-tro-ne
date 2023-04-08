const initState = {
    isLoggedIn: false, // dang nhap hay chua
    token: null, // JWT
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default authReducer;
