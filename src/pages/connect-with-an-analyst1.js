import React from 'react';
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
    name: 'adviceAndEvaluations',
    label: 'Advice & evaluations',
  },
  {
    name: 'analysisAndReasearch',
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
});

const ConnectWithAnAnalyst1 = () => {
  return (
    <Layout>
      <SEO title="Connect an analyst" />
      <div
        class="consult-form-area"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="container">
          <div className="row justify-content-center mt_50">
            <div className="col-md-11 col-lg-8 col-xl-6">
              <h3 className="form-title text-center">
                Connect with an analyst
              </h3>
              <Formik
                initialValues={{
                  EMAIL: '',
                  MOBILE: '',
                  OPTIONS: '',
                  LOCATION: '',
                  LOOKINGFOR: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  addToMailchimp('venlad888@gmail.com', {
                    FNAME: 'ven',
                    LOCATION: 'kat',
                    PHONE: '9785463120',
                    OPTIONS: 'TEXT',
                  })
                    .then(data => {
                      setSubmitting(true);
                      alert('success');
                      resetForm();
                    })
                    .catch(error => alert(error));
                  console.log(values.EMAIL);
                  console.log(JSON.stringify(values));
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
                              onChange={() =>
                                setFieldValue(`${name}`, !values.name)
                              }
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

                    <div className="form-submit-btn mt_50 text-center">
                      <button type="submit">Join us</button>
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

export default ConnectWithAnAnalyst1;
