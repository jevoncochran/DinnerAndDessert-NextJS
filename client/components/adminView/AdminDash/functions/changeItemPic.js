import { storage } from "../../../../firebase";
import axios from "axios";

export const changeItemPic = async (image, itemId, cb) => {
  const uploadTask = storage.ref(`menu-pics/${image.name}`).put(image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      //   setUploadProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    () => {
      storage
        .ref("menu-pics")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          // setProfilePicUrl(url);
          axios
            .patch(`http://localhost:5000/api/menu/item${itemId}`, {
              image: url,
            })
            .then(() => cb());
        });
    }
  );
};
