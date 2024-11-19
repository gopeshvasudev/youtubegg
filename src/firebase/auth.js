import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authProvider } from "./firebase";

export class Auth {
  auth;

  constructor() {
    this.auth = authProvider();
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
}

const auth = new Auth();
export default auth;
