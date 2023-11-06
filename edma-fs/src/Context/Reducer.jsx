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
                    users: newUser,
                };
            } else {
                return state;
            }
            case "LOGIN":
                const loggedUser = action.payload;
                const emailExisting = state.users.find(user => user.email === loggedUser.email);
                if (emailExisting) {
                    if (loggedUser.password === emailExisting.password) {
                        localStorage.setItem("user", JSON.stringify(loggedUser)); // Store user in localStorage
                        return {
                            ...state,
                            user: loggedUser,
                        };
                    } else {
                        return {
                            ...state,
                            user: null,
                        };
                    }
                }
                break;
            
        default:
            return state;
    }
};

export default Reducer;
