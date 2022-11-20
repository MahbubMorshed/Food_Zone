import * as firebase from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../App";

// export const loginRequest = (email, password) =>
//   firebase.auth().signInWithEmailAndPassword(email, password);

export const loginRequest = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password).then((res) => {
    console.log("signin successfully", res);
  });
};
