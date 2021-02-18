import { Banner } from "components";
import Images from "constants/images";
import { PhotoList } from "features/Photos/components";
import { removePhoto } from "features/Photos/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  // console.log("list of photo", photos);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePhotoEditClick = (photo) => {
    console.log(`edit`, photo);
    history.push(`/photos/${photo.id}`);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log(`remove`, photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Awesome Photos" backgroundUrl={Images.PHOTO_MAIN} />
      <Container className="text-center">
        <div>
          <Link to="/photos/add">Add Photos</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
