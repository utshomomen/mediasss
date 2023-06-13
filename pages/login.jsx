import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { userRequest } from "../requestMethods";

const Login = () => {
  const router = useRouter();
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await userRequest.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(loginSuccess(res.data));
      router.push("/");
    } catch (err) {
      dispatch(loginFailure());
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };

  return (
    <>
      <Head>
        <title>Log in</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login">
        <h2 className="login__title font-bold">Log in</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="">User name</label>
          <input
            className="login__input dark:text-gray-900 !p-2"
            type="text"
            placeholder="username"
            ref={userRef}
          />
          <label htmlFor="">Password</label>
          <input
            className="login__input dark:text-gray-900 !p-2"
            type="password"
            placeholder="password"
            ref={passwordRef}
          />
          <button className="login__button !p-2" type="submit" disabled={loading}>
            Log in
          </button>
        </form>
        <div className="login__link">
         No account? <Link href="/register">Register</Link>
        </div>
        {error && (
          <span className="login__error">
            Incorrect username or password!
          </span>
        )}
      </div>
    </>
  );
};

export default Login;