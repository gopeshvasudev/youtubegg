import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { authProvider } from "../firebase/firebase";
import { setUser, removeUser } from "../store/reducers/authSlice";
import { useEffect } from "react";

const useGetCurrentUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authProvider, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            fullname: user.displayName,
            profilePhoto: user.photoURL,
          })
        );

        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);
};

export default useGetCurrentUser;
