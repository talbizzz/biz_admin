import { newAppointments } from "./NewSchedule";
import { modifyScheduleInFirestore } from "./schedulesRequests";

const uids = [
  "NQCObf9G2YhmWjp0EJcDwVfmS5s2",
  "timOxs4lEzQkXmWj4O6XEXoTG9W2",
  "rebeka-stojkoska",
];

// const readUsers = async () => {
//   uids.forEach(async (uid) => {
//     const user = await getUserFromFirestore(uid);
//     log(user as string);
//   });
// };

// const downloadAllUserData = async (uid: string) => {
//   const user = await getUserFromFirestore(uid);
//   const userContactInfo = await getContactInfoFromFirestore(uid);
//   const userAssets = await getUserAssetsFromFirestore(uid);
//   const userSchedule = await getScheduleFromFirestore(uid);
//   const description = await getBioFromFirestore(uid);
//   const userData = {
//     user,
//     userContactInfo,
//     userAssets,
//     userSchedule,
//     description,
//   };
//   return userData;
// };

// const cloneUserIntoOther = async (
//   originUid: string,
//   destinationUid: string
// ) => {
//   await downloadAllUserData(originUid).then((userData) => {
//     if (userData) {
//       const { userContactInfo, userAssets, userSchedule, description } =
//         userData;
//       const { images, audios, youtubeVideos } = userAssets;
//       updateImagesInFirestore(images as ImageType[], destinationUid);
//       updateAudiosInFirestore(audios as AudioType[], destinationUid);
//       updateYoutubeVideosInFirestore(
//         youtubeVideos as YoutubeVideoType[],
//         destinationUid
//       );
//       updateScheduleInFirestore(
//         userSchedule as AppointmentType[],
//         destinationUid
//       );
//       updateContactInfoInFirestore(
//         userContactInfo as UserContactInfoType,
//         destinationUid
//       );
//       updateBioInFirestore(description as BioType, destinationUid);
//     }
//   });
// };

const main = async () => {
  // await readUsers();
  // await downloadAllUserData(uids[2]);
  // await cloneUserIntoOther(uids[2], uids[0]);
  await modifyScheduleInFirestore(newAppointments, uids[0]);
  console.log("done");
};

main();
