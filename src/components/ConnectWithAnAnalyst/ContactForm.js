import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import {
  CustomSelect,
  CustomCheckBox,
  CustomField,
  CustomTextArea,
} from '../CustomFields/CustomFields';
import BgImg from '../../assets/img/bg-shape.png';

const ContactForm = ({
  options,
  buttonLabel,
  title,
  termsAndConditions,
  textareaVisibilty,
  initialValues,
  checkBoxes,
  validationSchema,
  lookingForOptions,
}) => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg-shape.png" }) {
        id
        childImageSharp {
          gatsbyImageData(
            quality: 50
            webpOptions: { quality: 70 }
            width: 2000
          )
        }
      }
    }
  `);

  const image = getImage(placeholderImage);

  // Use like this:
  const bgImage = convertToBgImage(image);

  return (
    <>
      <div
        class="consult-form-area"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="container">
          <div className="row justify-content-center mt_50">
            <div className="col-md-11 col-lg-8 col-xl-6">
              <h3 className="form-title text-center">{title}</h3>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log(JSON.stringify(values));
                  resetForm();
                  setSubmitting(false);
                }}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <div className="form_group">
                      <CustomSelect
                        className="nice-select"
                        type="select"
                        name="type"
                        options={options}
                        onChange={e => setFieldValue('type', e.target.value)}
                        value={values.type}
                      />
                    </div>

                    {lookingForOptions && (
                      <div className="form_group mt_20">
                        <CustomSelect
                          className="nice-select"
                          type="select"
                          name="lookingFor"
                          options={lookingForOptions}
                          onChange={e =>
                            setFieldValue('lookingFor', e.target.value)
                          }
                          value={values.lookingFor}
                        />
                      </div>
                    )}
                    {!textareaVisibilty && checkBoxes && (
                      <div className="form_group mt_20 check-box-area">
                        <p className="mb_5">Looking for</p>
                        {checkBoxes.map((checkBox, index) => {
                          const { name, label } = checkBox;
                          return (
                            <div className="check-group">
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
                    )}
                    <div className="form_group multi-input">
                      {textareaVisibilty && (
                        <CustomTextArea
                          className="mt_20"
                          placeholder="Ask your question"
                          name="textareaQuestions"
                          value={values.textareaQuestions}
                          onChange={e =>
                            setFieldValue('textareaQuestions', e.target.value)
                          }
                        />
                      )}
                      {!textareaVisibilty && (
                        <CustomField
                          className="mt_20"
                          type="text"
                          placeholder="Working from (location)"
                          name="location"
                          value={values.location}
                          onChange={e =>
                            setFieldValue('location', e.target.value)
                          }
                        />
                      )}

                      <CustomField
                        className="mt_20"
                        type="email"
                        placeholder="Primary email address"
                        name="email"
                        value={values.email}
                        onChange={e => setFieldValue('email', e.target.value)}
                      />
                      <CustomField
                        className="mt_20"
                        type="text"
                        placeholder="Primary mobile no"
                        name="mobile"
                        value={values.mobile}
                        onChange={e => setFieldValue('mobile', e.target.value)}
                      />
                    </div>

                    {termsAndConditions && (
                      <div className="form_group mt_50">
                        <div className="check-group">
                          <CustomCheckBox
                            id="agree"
                            type="checkbox"
                            name="agree"
                            checked={values.agree}
                            onChange={() =>
                              setFieldValue('agree', !values.agree)
                            }
                          />

                          <label htmlFor="agree">
                            I agree to receive newsletters & other
                            communications from The Analyst Syndicate
                          </label>
                        </div>
                        <div className="form-btn-group">
                          <a className="mr_20" href="#">
                            Privacy policy
                          </a>
                          <a href="#">Terms & conditions</a>
                        </div>
                      </div>
                    )}

                    <div className="form-submit-btn mt_50 text-center">
                      <button type="submit">{buttonLabel}</button>
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
    </>
  );
};
export default ContactForm;
