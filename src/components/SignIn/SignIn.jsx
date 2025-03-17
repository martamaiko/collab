import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../Redux/auth-reducer";
import { NavLink, useNavigate } from "react-router-dom";
import s from "../common/components/Form.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data.email, data.password));
      navigate("/profile");
    } catch (error) {
      setError("root", { type: "manual", message: error.message });
    }
  };

  return (
    <div className={s.formContainer}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={s.header}>Sign in</h1>

        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="email">Email</label>
          <input className={`${s.input} ${errors.email ? s.inputError : ""}`}
          {...register("email", { required: "Email is required" })} />
          {errors.email && <p className={s.errors}>{errors.email.message}</p>}
        </div>

        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="password">Password</label>
          <input className={`${s.input} ${errors.password ? s.inputError : ""}`}
          type="password"
          {...register("password", { required: "Password is required" })} />
          {errors.password && <p className={s.errors}>{errors.password.message}</p>}
        </div>

        {errors.root && <p className={s.error}>{errors.root.message}</p>}

        <button className={s.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        <p className={s.text}>
          Don't have an account?
          <NavLink  className={s.link} to="/signUp">Sign up</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
