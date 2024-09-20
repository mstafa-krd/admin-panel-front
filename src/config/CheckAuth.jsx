import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { UserContext } from "../context/userContext";
import { authApi } from "../api/authApi.jsx";

const CheckAuth = () => {
  const [loader, setLoader] = useState(true);
  const [auth, setAuth] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(authApi, { withCredentials: true })
      .then((res) => {
        setLoader(false);
        setUser(res.data);
        console.log(user);
        if (user && localStorage.getItem("user")) {
          setAuth(true);
        }
      })
      .catch((err) => {
        console.error("Error checking authentication status", err);
        setLoader(false);
      });
  }, [setUser,user]);

  return loader ? <Loader /> : auth ? <Outlet /> : <Navigate to="/login" />;
};

export default CheckAuth;
