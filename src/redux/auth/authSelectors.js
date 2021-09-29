const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getIsChecksCurrentUser = (state) => state.auth.isChecksCurrentUser;

export { getIsLoggedIn, getUserName, getIsChecksCurrentUser };
