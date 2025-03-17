import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { signUp } from "../../api/api";
import s from "../common/components/Form.module.css"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await signUp(data.email, data.password);

    if (response.success) {
      alert("Sign up successful! You can now log in.");
      navigate("/login");
    } else {
      setError("root", {
        type: "manual",
        message: response.message,
      });
    }
  };

  return (
    <div className={s.formContainer}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={s.header}>Sign up</h1>

        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="email">Email</label>
          <input className={`${s.input} ${errors.email ? s.inputError : ""}`}
          {...register("email", { required: "Email is required" })} />
          {errors.email && <p className={s.errors}>{errors.email.message}</p>}
        </div>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="password">Password</label>
          <input className={`${s.input} ${errors.email ? s.inputError : ""}`}
          type="password" {...register("password", { required: "Password is required" })} />
          {errors.password && <p className={s.errors}>{errors.password.message}</p>}
        </div>

        {errors.root && <p className={s.error}>{errors.root.message}</p>}

        <button className={s.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>

        <p className={s.text}>
        Already have an account?
          <NavLink  className={s.link} to="/login">Sign in</NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
