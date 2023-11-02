const Reducer = (state, action) => {
    switch (action.type) {
        case "LANG":
            return {
                ...state,
                lang: action.payload.lang
            };

        default:
            return state;
    }
};

export default Reducer;
