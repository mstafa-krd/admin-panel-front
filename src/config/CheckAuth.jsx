import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { UserContext } from "../context/userContext";
import { authApi } from "../api/authApi.jsx";

const CheckAuth = () => {
  const [loader, setLoader] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(authApi, { withCredentials: true })
      .then(() => {
        setLoader(false);
      })
      .catch((err) => {
        console.error("Error checking authentication status", err);
        setLoader(false);
      });
  }, [user]);
  return loader ? (
    <Loader />
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default CheckAuth;
