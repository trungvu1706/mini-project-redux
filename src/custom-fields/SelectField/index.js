import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

function SelectField(props) {
  const { field, options, label, disabled, placeholder, form } = props;
  const { name, value } = field; // field has 4 events {name, value, onChange, onBlur}
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const selectedOption = options.find((option) => option.value === value);

  /**
   *  change event onChange of field
   * -> create changeEvent fake
   * -> target{name, value}
   * -> change onchange = field.onChange(changeEvent)
   */

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <div className="select-field">
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Select
          id={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}
          placeholder={placeholder}
          isdisabled={disabled}
          options={options}
          className={showError ? "is-invalid" : ""}
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </div>
  );
}

SelectField.propTypes = {
  //formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  // your form
  options: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SelectField;
