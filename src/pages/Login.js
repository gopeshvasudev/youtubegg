import { useSelector } from "react-redux";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const Login = () => {
  const isLoginForm = useSelector((store) => store.app.isLoginForm);

  return (
    <main className="main w-full h-screen flex items-center justify-center">
      {isLoginForm ? <SignInForm /> : <SignUpForm />}
    </main>
  );
};

export default Login;
