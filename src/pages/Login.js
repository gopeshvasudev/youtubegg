import { useSelector } from "react-redux";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const Login = () => {
  const isLoginForm = useSelector((store) => store.app.isLoginForm);

  return (
    <main className="main w-full h-screen flex items-center justify-center bg-zinc-900 text-white">
      {isLoginForm ? <SignInForm /> : <SignUpForm />}
    </main>
  );
};

export default Login;
