const mainApi = import.meta.env.VITE_API + "/task"; // only when using vite you use  import.meta.env

const createTaskApi = `${mainApi}/create`;
const getAllTasksApi = `${mainApi}/tasks`;
const deleteTaskApi = `${mainApi}`;
const getUsersTasksApi = `${mainApi}/user-tasks`;
const updateTaskStateApi = `${mainApi}`;

export {
  createTaskApi,
  getAllTasksApi,
  deleteTaskApi,
  getUsersTasksApi,
  updateTaskStateApi,
};
