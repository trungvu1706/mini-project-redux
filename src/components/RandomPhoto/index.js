import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";
import "./style.scss";

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 1000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <div className="random-photo">
      <div>
        <Button
          color="info"
          className="random-photo__button"
          name={name}
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Not Found"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </div>
  );
}

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

export default RandomPhoto;
