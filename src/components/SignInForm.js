import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginForm, setPasswordVisible } from "../store/reducers/appSlice";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import auth from "../firebase/auth";

const SignInForm = () => {
  const dispatch = useDispatch();
  const isPasswordVisible = useSelector((store) => store.app.isPasswordVisible);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const isLoginFormHandler = () => {
    dispatch(setIsLoginForm());
  };

  const passwordVisibleHandler = () => {
    dispatch(setPasswordVisible());
  };

  const submitHandler = async (data) => {
    try {
      const { email, password } = data;
      await auth.signIn({ email, password });
    } catch (error) {
      console.log("Sign in error: ", error);
    } finally {
      reset({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col bg-zinc-800 w-80 p-3 gap-3 rounded-lg"
      >
        <h1 className="text-2xl font-black mb-2">Sign In</h1>

        <input
          className="w-full p-2 bg-transparent outline-none border-b border-zinc-600 focus:border-white"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />

        {errors.email && (
          <p className="text-sm text-red-500">Email is Required</p>
        )}

        <div className="password-field w-full flex items-center border-b border-zinc-600 focus:border-white pr-2">
          <input
            className="w-full p-2 bg-transparent outline-none"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <span
            onClick={passwordVisibleHandler}
            className="text-xl text-zinc-400 cursor-pointer"
          >
            {!isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />}
          </span>
        </div>

        {errors.password && (
          <p className="text-sm text-red-500">Password is Required</p>
        )}

        <p
          onClick={isLoginFormHandler}
          className="cursor-pointer text-sm my-5 text-center"
        >
          New to YouTube? <span className="font-bold">Sign up now</span>
        </p>

        <button type="submit" className="bg-red-600 py-2 rounded-lg font-bold">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
