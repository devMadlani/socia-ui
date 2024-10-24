export const RegisterStart = (userCredentials) => ({
  type: "REGISTER_START",
});
export const RegisterSuccess = (user) => ({
  type: "REGISTER_SUCCESS",
  payload: user,
});
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
export const logout = ()=>({
  type:"LOGOUT"
})
export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

export const unfollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});
