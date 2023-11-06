const getUser = () => {
    if (localStorage.getItem("user")) {
        return "1";
    }
    return "0";
};

export {
    getUser,
}
