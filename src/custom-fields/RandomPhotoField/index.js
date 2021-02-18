import { RandomPhoto } from "components";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";

function RandomPhotoField(props) {
  const { form, field, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <RandomPhoto
          name={name}
          imageUrl={value}
          onImageUrlChange={handleImageUrlChange}
          onRandomButtonBlur={onBlur}
        />
        <div className={showError ? "is-invalid" : ""}></div>
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </div>
  );
}

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

export default RandomPhotoField;
