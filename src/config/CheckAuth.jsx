import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { UserContext } from "../context/userContext";
import { authApi } from "../api/authApi.jsx";

const CheckAuth = () => {
  const [auth, setAuth] = useState();
  const [loader, setLoader] = useState(true);
  const { user,setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(authApi, { withCredentials: true })
      .then((res) => {
        setAuth(res.data);
        setUser(res.data.user);
        localStorage.setItem("user", true);
        setLoader(false);
      })
      .catch((err) => {
        console.error("Error checking authentication status", err);
        setLoader(false);
      });
  }, [setUser]);
  console.log(user);
  return loader ? (
    <Loader />
  ) : auth?.authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default CheckAuth;
