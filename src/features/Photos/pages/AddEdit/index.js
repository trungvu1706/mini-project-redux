import { Banner } from "components";
import Images from "constants/images";
import { PhotoForm } from "features/Photos/components";
import { addPhoto, updatePhoto } from "features/Photos/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./style.scss";

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  // take photoId
  const { photoId } = useParams();
  console.log({ photoId });

  const editedPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === photoId)
  );

  const isAddMode = !photoId;
  const initialValues = isAddMode
    ? { title: "", categoryId: null, photo: "" }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(values);
          // console.log({ action });
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick Amazing Photos" backgroundUrl={Images.ADD_PHOTOS} />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
