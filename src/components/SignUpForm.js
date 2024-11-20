import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginForm, setPasswordVisible } from "../store/reducers/appSlice";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import auth from "../firebase/auth";
import { authProvider } from "../firebase/firebase";
import { setUser } from "../store/reducers/authSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isPasswordVisible = useSelector((store) => store.app.isPasswordVisible);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const passwordVisibleHandler = () => {
    dispatch(setPasswordVisible());
  };

  const isLoginFormHandler = () => {
    dispatch(setIsLoginForm());
  };

  const submitHandler = async (data) => {
    try {
      const { fullname, email, password } = data;

      const user = await auth.signUp({ email, password });

      if (user) {
        await auth.updateUser({ fullname });

        const { displayName, email, uid, photoURL } = authProvider.currentUser;
        dispatch(
          setUser({
            uid,
            email,
            fullname: displayName,
            profilePicture: photoURL,
          })
        );
      }
    } catch (error) {
      console.log("Sign up error: ", error);
    } finally {
      reset({
        fullname: "",
        email: "",
        password: "",
      });
    }
  };

  console.log(authProvider.currentUser);

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col bg-zinc-800 w-80 p-3 gap-3 rounded-lg"
      >
        <h1 className="text-2xl font-black mb-2">Sign Up</h1>

        <input
          autoComplete="off"
          className="w-full p-2 bg-transparent outline-none border-b border-zinc-600 focus:border-white"
          type="text"
          placeholder="Fullname"
          {...register("fullname", { required: true })}
        />

        {errors.fullname && (
          <p className="text-sm text-red-500">Fullname is Required</p>
        )}

        <input
          autoComplete="off"
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
            autoComplete="off"
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
          Already have an Account?{" "}
          <span className="font-bold">Sign in now</span>
        </p>

        <button type="submit" className="bg-red-600 py-2 rounded-lg font-bold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
