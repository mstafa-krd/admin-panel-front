const mainApi = process.env.API;

const loginApi = `${mainApi}/login`;
const createUserApi = `${mainApi}/create`;
const logoutApi = `${mainApi}/logout`;
const getAllUsersApi = `${mainApi}/users`;
const updateUserApi = `${mainApi}`;
const deleteUserApi = `${mainApi}`;
const getUserApi = `${mainApi}`;
const updateTeamMemberApi = `${mainApi}/team`;

export {
  loginApi,
  createUserApi,
  logoutApi,
  getAllUsersApi,
  updateUserApi,
  deleteUserApi,
  getUserApi,
  updateTeamMemberApi,
};
