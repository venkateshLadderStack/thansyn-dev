import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react';
import CloseImg from '../assets/img/close.svg';
import { CustomField } from './CustomFields/CustomFields';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import axios from 'axios';
import { toast } from 'react-toastify';

const FloatingSubscribeBox = ({ visibility, hidePopup }) => {
  const WEBSITE_URL = 'http://www.ladderstack.team/thansyn';
  const FORM_ID = '535'; //Form id that provides Contact Form 7
  const [token, setToken] = useState(''); // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false); // manage is success message state
  const [messageSent, setMessageSent] = useState(false); // manage sent message state

  useEffect(() => {
    axios({
      method: 'post',
      url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
      data: {
        username: 'rishabh90', // provide a user credential with subscriber role
        password: 'Test1234@',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setToken(response.data.token);
      })
      .catch(error => console.error('Error', error));
  }, []);

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
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          // here we created a FormData field for each form field
          const bodyFormData = new FormData();
          bodyFormData.set('your-email', values.EMAIL);
          bodyFormData.set('from', 'From home page popup subscribe form');
          //here we sent
          axios({
            method: 'post',
            url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
            data: bodyFormData,
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(response => {
              // actions taken when submission goes OK
              actions.resetForm();
              actions.setSubmitting(false);
              setMessageSent(true);
              setIsSuccessMessage(true);
              toast.info('Submitted');
            })
            .catch(error => {
              // actions taken when submission goes wrong
              actions.setSubmitting(false);
              setMessageSent(true);
              setIsSuccessMessage(false);
            });
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
