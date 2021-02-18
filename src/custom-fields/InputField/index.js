import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, type, label, disabled, placeholder, form } = props;
  const { name } = field; // field has 4 events {name, value, onChange, onBlur}
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input
          id={name}
          {...field}
          placeholder={placeholder}
          type={type}
          isdisabled={disabled}
          invalid={showError}
        />

        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </div>
  );
}

InputField.propTypes = {
  //formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  // your form
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
