const Reducer = (state, action) => {
    switch (action.type) {
        case "LANG":
            return {
                ...state,
                lang: action.payload.lang
            };
        case "REGISTER":
            const newUser = action.payload;
            const emailExists = state.users.some(user => user.email === newUser.email);
            if (!emailExists) {
                const newUsers = [...state.users, newUser];
                localStorage.setItem("users", JSON.stringify(newUsers));
                return {
                    ...state,
                    users: newUsers,
                };
            } else {
                return state;
            } 

        default:
            return state;
    }
};

export default Reducer;
