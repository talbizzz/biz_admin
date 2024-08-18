import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../config/firebase";
import { log } from "./helpers";
import { LoggerType } from "../types/CommonTypes";
import { UserContactInfoType } from "../types/ContactInfoTypes";
import { postDataToFirestore } from "./postDataToFirestore";

export const getContactInfoFromFirestore = async (uid: string) => {
  log("getting contact info from firestore...", LoggerType.info);
  const docRef = doc(db, "artist-contactInfo", uid);
  try {
    const data = await getDoc(docRef);
    return data.data();
  } catch (error) {
    log("Error getting document: " + error, LoggerType.error);
    return;
  }
};

export const updateContactInfoInFirestore = (
  contactInfo: UserContactInfoType,
  uid: string
) => {
  log("updating contact info in firestore...", LoggerType.info);
  const docRef = doc(db, "artist-contactInfo", uid);
  postDataToFirestore(docRef, contactInfo)
    .then(() => {
      log("contact info updated in firestore", LoggerType.success);
    })
    .catch((error) => {
      log("error updating contact info: " + error, LoggerType.error);
    });
};
