import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import CloseImg from '../assets/img/close.svg';
import { CustomField } from './CustomFields/CustomFields';

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
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('invalid email')
            .required('email is required'),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          alert('Your Message Submitted Successfully');
          resetForm();
        }}
      >
        {() => (
          <Form>
            <CustomField type="email" placeholder="Your Email" name="email" />

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
