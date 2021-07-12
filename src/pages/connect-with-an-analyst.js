import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import ContactForm from '../components/ConnectWithAnAnalyst/ContactForm';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as Yup from 'yup';

import { graphql, useStaticQuery } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import {
  CustomSelect,
  CustomCheckBox,
  CustomField,
  CustomTextArea,
} from '../components/CustomFields/CustomFields';
import BgImg from '../assets/img/bg-shape.png';

const options = [
  {
    key: 'Others',
    value: 'others',
  },
  {
    key: 'Some thing',
    value: 'something',
  },
  {
    key: 'Some thing1',
    value: 'something1',
  },
  {
    key: 'Some thing2',
    value: 'something2',
  },
  {
    key: 'Some thing3',
    value: 'something3',
  },
  {
    key: 'Some thing4',
    value: 'something4',
  },
];

const checkBoxes = [
  {
    name: 'advice-and-evaluations',
    label: 'Advice & evaluations',
  },
  {
    name: 'analysis-and-reasearch',
    label: 'Analysis & research',
  },
  {
    name: 'insights',
    label: 'Insights',
  },
];

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  LOCATION: Yup.string()
    .min(2, 'name is too sort')
    .max(30, 'must be 15 character or less')
    .required('enter your working location'),
  MOBILE: Yup.string()
    .max(10, 'mobile number should be 10 digit')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('phone number is required'),
  EMAIL: Yup.string().email('invalid email').required('email is required'),
  AGREE: Yup.boolean()
    .required('Need to agree terms and conditions')
    .oneOf([true], 'The terms and conditions must be accepted.'),
});

const ConnectWithAnAnalyst = () => {
  const WEBSITE_URL = 'http://www.ladderstack.team/thansyn';
  const FORM_ID = '534'; //Form id that provides Contact Form 7
  const [token, setToken] = useState(''); // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false); // manage is success message state
  const [messageSent, setMessageSent] = useState(false); // manage sent message state

  const [lookingFor, setLookingFor] = useState([]);

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
    <Layout>
      <SEO title="Connect an analyst" />
      <div
        className="consult-form-area"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="container">
          <div className="row justify-content-center mt_50">
            <div className="col-md-11 col-lg-8 col-xl-6">
              <h3 className="form-title text-center">Consult an analyst</h3>
              <Formik
                initialValues={{
                  EMAIL: '',
                  MOBILE: '',
                  OPTIONS: '',
                  LOCATION: '',
                  LOOKINGFOR: '',
                  AGREE: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(true);
                  // here we created a FormData field for each form field
                  const bodyFormData = new FormData();
                  bodyFormData.set('your-email', values.EMAIL);
                  bodyFormData.set('your-looking', lookingFor);
                  bodyFormData.set('your-options', values.OPTIONS);
                  bodyFormData.set('your-phone', values.MOBILE);
                  bodyFormData.set('your-location', values.LOCATION);

                  console.log(lookingFor);

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
                      alert('submitted');
                    })
                    .catch(error => {
                      // actions taken when submission goes wrong
                      actions.setSubmitting(false);
                      setMessageSent(true);
                      setIsSuccessMessage(false);
                    });
                }}
              >
                {({ values, setFieldValue, setSubmitting, resetForm }) => (
                  <Form>
                    <div className="form_group">
                      <CustomSelect
                        className="nice-select"
                        type="select"
                        name="OPTIONS"
                        options={options}
                        onChange={e => setFieldValue('OPTIONS', e.target.value)}
                        value={values.OPTIONS}
                      />
                    </div>
                    <div className="form_group mt_20 check-box-area">
                      <p className="mb_5">Looking for</p>
                      {checkBoxes.map((checkBox, index) => {
                        const { name, label } = checkBox;
                        return (
                          <div className="check-group" key={index}>
                            <CustomCheckBox
                              id={name}
                              type="checkbox"
                              name={name}
                              checked={values.name}
                              onChange={() => {
                                setFieldValue(`${name}`, !values.name);
                                setLookingFor([...lookingFor, name && name]);
                              }}
                            />
                            <label htmlFor={name}>{label}</label>
                          </div>
                        );
                      })}
                    </div>
                    <div className="form_group multi-input">
                      <CustomField
                        className="mt_20"
                        type="text"
                        placeholder="Working from location"
                        name="LOCATION"
                        value={values.LOCATION}
                        onChange={e =>
                          setFieldValue('LOCATION', e.target.value)
                        }
                      />

                      <CustomField
                        className="mt_20"
                        type="email"
                        placeholder="Primary email address"
                        name="EMAIL"
                        value={values.EMAIL}
                        onChange={e => setFieldValue('EMAIL', e.target.value)}
                      />
                      <CustomField
                        className="mt_20"
                        type="text"
                        placeholder="Primary mobile no"
                        name="MOBILE"
                        value={values.MOBILE}
                        onChange={e => setFieldValue('MOBILE', e.target.value)}
                      />
                    </div>
                    <div className="form_group mt_50">
                      <div className="check-group">
                        <CustomCheckBox
                          id="agree"
                          type="checkbox"
                          name="AGREE"
                          checked={values.AGREE}
                          onChange={() => setFieldValue('AGREE', !values.agree)}
                        />

                        <label htmlFor="agree">
                          I agree to receive newsletters & other communications
                          from The Analyst Syndicate
                        </label>
                      </div>
                      <div className="form-btn-group">
                        <a className="mr_20" href="#">
                          Privacy policy
                        </a>
                        <a href="#">Terms & conditions</a>
                      </div>
                    </div>

                    <div className="form-submit-btn mt_50 text-center">
                      <button type="submit">Connect</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="col-xl-10">
              <p className="mt_50 text-center">
                Thanks for your interest in joining the syndicate. We’ll review
                the details and get in-touch.{' '}
                <br className="d-none d-xl-block" /> The Analyst Syndicate is an
                open platform for research & advisory services firms and many
                leading independent consultants to contribute to insights and
                help businesses transform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConnectWithAnAnalyst;
