import React from "react";
import PropTypes from "prop-types";
import PhotoCard from "../PhotoCard";
import { Col, Row } from "reactstrap";

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;
  return (
    <div className="photo-list">
      <Row>
        {photoList.map((photo, index) => (
          <Col md="6" key={index}>
            <PhotoCard
              photo={photo}
              onEditClick={onPhotoEditClick}
              onRemoveClick={onPhotoRemoveClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

export default PhotoList;
