import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "../config/firebase";
import { UserType } from "../types/UserType";
import { LoggerType } from "../types/CommonTypes";
import { log } from "./helpers";

export const getUserFromFirestore = async (uid: string) => {
  log("getting user from firestore...", LoggerType.info);
  const userContactInfoDocRef = doc(db, "artist-personalData", uid);
  try {
    const data = await getDoc(userContactInfoDocRef);
    const result = data.data();
    return result;
  } catch (error) {
    log("Error getting document: " + error, LoggerType.error);
    return error;
  }
};

export const postNewUserToFirestore = async (uid: string, user: UserType) => {
  log("posting new user to firestore...", LoggerType.info);
  const userContactInfoDocRef = doc(db, "artist-personalData", uid);
  await setDoc(userContactInfoDocRef, user.user)
    .then(() => {
      log("user posted to firestore", LoggerType.success);
    })
    .catch((error) => {
      log("error posting user: " + error, LoggerType.error);
    });
};
