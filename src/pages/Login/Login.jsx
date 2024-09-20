import { useContext, useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/userApi";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);

  const nav = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await axios
      .post(loginApi, data, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setError(false);
        if (res.status === 200) {
          nav("/dashboard");
        }
      })
      .catch((e) => {
        setError(true);

        console.log(e);
      });
  };
  return (
    <div className="container">
      <div className="login">
        <h2 className="login-title">Login</h2>
        <form onSubmit={onSubmitHandler} className="login-form">
          <input
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email"
            name="email"
            type="email"
            required
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Password"
            name="password"
            type="password"
          />
          {error ? <p className="error">Incorrect email or password</p> : null}
          <button type="submit" className="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
