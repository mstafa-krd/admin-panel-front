const mainApi = import.meta.env.VITE_API; // only when using vite you use  import.meta.env

const authApi = `${mainApi}/auth/status`;

export { authApi };
