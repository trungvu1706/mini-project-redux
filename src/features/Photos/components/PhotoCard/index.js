import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Button } from "reactstrap";

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;

  const handleEditClick = () => {
    if (onEditClick) return onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) return onRemoveClick(photo);
  };
  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button color="primary" size="sm" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button color="danger" size="sm" onClick={handleRemoveClick}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

export default PhotoCard;
