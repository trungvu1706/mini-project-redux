import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { InputField, RandomPhotoField, SelectField } from "custom-fields";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as yup from "yup";

function PhotoForm(props) {
  const { initialValues, isAddMode } = props;

  const schema = yup.object().shape({
    title: yup.string().required("Title is required. "),
    categoryId: yup.number().required("Category is required.").nullable(),
    photo: yup.string().required("Photo is required."),
  });

  return (
    <div className="photo-form">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={props.onSubmit}
      >
        {(formikProps) => {
          const { values, errors, touched, isSubmitting } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <FastField
                name="title"
                component={InputField}
                placeholder="Add your title here .... "
                label="Title"
              />

              <FastField
                name="categoryId"
                component={SelectField}
                label="Category"
                placeholder="Choose your category here ....  "
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FastField
                name="photo"
                label="Photo"
                component={RandomPhotoField}
              />

              <FormGroup>
                <Button color={isAddMode ? "primary" : "warning"} type="submit">
                  {isSubmitting && <Spinner size="sm" className="center" />}
                  {isAddMode ? "Add to album" : "Update photo"}
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

PhotoForm.propType = {
  onSubmit: PropTypes.func,
};

export default PhotoForm;
