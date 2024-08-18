import { setDoc } from "firebase/firestore/lite";
import { log } from "./helpers";
import { LoggerType } from "../types/CommonTypes";

export const postDataToFirestore = async (ref: any, data: object) => {
  try {
    await setDoc(ref, { data });
    log("Document successfully written!", LoggerType.success);
  } catch (error) {
    console.error("error: ", error);
  }
};
