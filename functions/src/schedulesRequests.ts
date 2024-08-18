import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../config/firebase";
import { postDataToFirestore } from "./postDataToFirestore";
import { AppointmentType } from "../types/ScheduleTypes";
import { log } from "./helpers";
import { LoggerType } from "../types/CommonTypes";
// import { v4 as uuid } from "uuid";

export const getScheduleFromFirestore = async (uid: string) => {
  log("getting schedule from firestore...", LoggerType.info);
  const docRef = doc(db, "artist-appointments", uid);
  try {
    const data = await getDoc(docRef);
    return data.data();
  } catch (error) {
    log("Error getting document: " + error, LoggerType.error);
    return error;
  }
};

export const updateScheduleInFirestore = async (
  schedule: AppointmentType[],
  uid: string
) => {
  log("updating schedule in firestore...", LoggerType.info);
  const docRef = doc(db, "artist-appointments", uid);
  await postDataToFirestore(docRef, schedule)
    .then(() => {
      log("schedule updated in firestore", LoggerType.success);
    })
    .catch((error) => {
      log("error updating schedule: " + error, LoggerType.error);
    });
};

export const modifyScheduleInFirestore = async (
  schedule: AppointmentType[],
  uid: string
) => {
  // gets the current schedule from firestore and updates it with the new schedule
  const currentSchedule = ((await getScheduleFromFirestore(uid)) as any).data;
  /**
   * ADD MODIFICATIONS HERE
   */
  let updatedSchedule = [...currentSchedule];
  await updateScheduleInFirestore(updatedSchedule, uid);
};
