import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authProvider } from "./firebase";

export class Auth {
  auth;

  constructor() {
    this.auth = authProvider;
  }

  async signUp({ email, password }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return userCredential.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    }
  }

  async signIn({ email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return userCredential.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    }
  }

  async updateUser({ fullname }) {
    try {
      await updateProfile(this.auth.currentUser, {
        displayName: fullname,
        photoURL:
          "https://imgs.search.brave.com/9lEhL1vTnoiJt1H8A_e-WI1QXcKV1iw4W_YLF65ZdC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvM2Qt/cmVuZGVyLWF2YXRh/ci1jaGFyYWN0ZXJf/MjMtMjE1MDYxMTc2/NS5qcGc_c2VtdD1h/aXNfaHlicmlk",
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    }
  }
}

const auth = new Auth();
export default auth;
