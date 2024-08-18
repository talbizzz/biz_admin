import { doc, getDoc } from "firebase/firestore/lite";
import { postDataToFirestore } from "./postDataToFirestore";
import { BioType } from "../types/DescriptionTypes";
import { db } from "../config/firebase";
import { log } from "./helpers";
import { LoggerType } from "../types/CommonTypes";

export const getBioFromFirestore = async (uid: string) => {
  log("getting description text from firestore...", LoggerType.info);
  const userContactInfoDocRef = doc(db, "artist-biography", uid);
  try {
    const data = await getDoc(userContactInfoDocRef);
    return data.data();
  } catch (error) {
    log("Error getting document: " + error, LoggerType.error);
    return;
  }
};

export const updateBioInFirestore = (descriptionText: BioType, uid: string) => {
  const docRef = doc(db, "artist-biography", uid);
  postDataToFirestore(docRef, descriptionText)
    .then(() => {
      log("description text updated in firestore", LoggerType.success);
    })
    .catch((error) => {
      log("error updating description text: " + error, LoggerType.error);
    });
};
