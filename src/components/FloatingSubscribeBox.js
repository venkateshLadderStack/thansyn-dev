import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import CloseImg from '../assets/img/close.svg';
import { CustomField } from './CustomFields/CustomFields';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { values } from 'lodash';

const FloatingSubscribeBox = ({ visibility, hidePopup }) => {
  return (
    <div
      className="subscribe_box"
      style={{ display: `${visibility ? 'block' : 'none'}` }}
    >
      <img src={CloseImg} className="close_btn" alt="" onClick={hidePopup} />
      <p>Get insights from leading analysts</p>

      <Formik
        initialValues={{
          EMAIL: '',
        }}
        validationSchema={Yup.object({
          EMAIL: Yup.string()
            .email('invalid email')
            .required('email is required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          addToMailchimp(values.EMAIL, { EMAIL: values.EMAIL })
            .then(data => {
              setSubmitting(true);
              alert('success');
              resetForm();
            })
            .catch(error => alert(error));
          console.log(values.EMAIL);
        }}
      >
        {(values, setFieldValue) => (
          <Form>
            <CustomField
              type="email"
              placeholder="Your Email"
              name="EMAIL"
              value={values.EMAIL}
            />

            <button type="submit" className="blue_btn">
              Subscribe [Free]
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FloatingSubscribeBox;
