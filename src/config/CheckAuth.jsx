import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { UserContext } from "../context/userContext";
import { authApi } from "../api/authApi.jsx";

const CheckAuth = () => {
  const [auth, setAuth] = useState();
  const [loader, setLoader] = useState(true);
  const { user, setUser } = useContext(UserContext);

 useEffect(() => {
   axios
     .get(authApi, { withCredentials: true })
     .then((res) => {
       console.log("User Data:", res.data.user);
       console.log("Auth Status:", res.data.authenticated);
       console.log("Cookies sent:", document.cookie); // Check for cookies
       setAuth(res.data);
       setUser(res.data.user);
     })
     .catch((err) => {
       console.error("Error checking authentication status", err);
       setAuth({ authenticated: false });
     })
     .finally(() => {
       setLoader(false);
     });
 }, [setUser]);

  return loader ? (
    <Loader />
  ) : auth?.authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default CheckAuth;
