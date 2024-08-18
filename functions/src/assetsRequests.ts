import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../config/firebase";
import { postDataToFirestore } from "./postDataToFirestore";
import { log } from "./helpers";
import { LoggerType } from "../types/CommonTypes";

/** GETTERS */
export const getUserPhotosFromFirestore = async (uid: string) => {
  log("getting user photos from firestore...", LoggerType.info);
  const userContactInfoDocRef = doc(db, "artist-assets", uid + "-images");
  try {
    const data = await getDoc(userContactInfoDocRef);
    return data.data();
  } catch (error) {
    log("Error getting document: " + error, LoggerType.error);
    return;
  }
};

export const getUserAudiosFromFirestore = async (uid: string) => {
  log("getting user audios from firestore...", LoggerType.info);
  const docRef = doc(db, "artist-assets", uid + "-audios");
  try {
    const data = await getDoc(docRef);
    return data.data();
  } catch (error) {
    log("Error getting document: " + error, LoggerType.error);
    return;
  }
};

export const getUserYoutubeVideosFromFirestore = async (uid: string) => {
  log("getting user youtube videos from firestore...", LoggerType.info);
  const docRef = doc(db, "artist-assets", uid + "-youtubeVideos");
  try {
    const data = await getDoc(docRef);
    return data.data();
  } catch (error) {
    log("Error getting document: " + error, LoggerType.error);
    return;
  }
};

export const getUserAssetsFromFirestore = async (uid: string) => {
  const images = await getUserPhotosFromFirestore(uid);
  const audios = await getUserAudiosFromFirestore(uid);
  const youtubeVideos = await getUserYoutubeVideosFromFirestore(uid);
  return { images, audios, youtubeVideos };
};

/** SETTERS */

export const updateImagesInFirestore = async (images: any, uid: string) => {
  log("updating images in firestore...", LoggerType.info);
  const docRef = doc(db, "artist-assets", uid + "-images");
  const data = images.portraits;
  await postDataToFirestore(docRef, { data })
    .then(() => {
      log("images updated in firestore", LoggerType.success);
    })
    .catch((error) => {
      log("Error updating images in firestore: " + error, LoggerType.error);
    });
};

export const updateAudiosInFirestore = (audios: any, uid: string) => {
  log("updating audios in firestore...", LoggerType.info);
  const docRef = doc(db, "artist-assets", uid + "-audios");
  const data = audios.audios;
  postDataToFirestore(docRef, { data })
    .then(() => {
      log("audios updated in firestore", LoggerType.success);
    })
    .catch((error) => {
      log("Error updating audios in firestore: " + error, LoggerType.error);
    });
};

export const updateYoutubeVideosInFirestore = (
  youtubeVideos: any,
  uid: string
) => {
  log("updating youtube videos in firestore...", LoggerType.info);
  const docRef = doc(db, "artist-assets", uid + "-youtubeVideos");
  const data = youtubeVideos.youtubeVideos;
  postDataToFirestore(docRef, { data })
    .then(() => {
      log("youtube videos updated in firestore", LoggerType.success);
    })
    .catch((error) => {
      log(
        "Error updating youtube videos in firestore: " + error,
        LoggerType.error
      );
    });
};
