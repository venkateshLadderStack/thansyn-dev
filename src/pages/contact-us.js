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

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  mobile: Yup.string()
    .max(10, 'mobile number should be 10 digit')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('phone number is required'),
  email: Yup.string().email('invalid email').required('email is required'),
  textareaQuestions: Yup.string()
    .max(1000, 'Question is too long !')
    .optional(),
});

const ContactUs = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />

      {/* <ContactForm
        options={options}
        buttonLabel="Submit"
        title="Contact us"
        textareaVisibilty={true}
        initialValues={{
          type: '',
          email: '',
          mobile: '',
          textareaQuestions: '',
        }}
        validationSchema={validationSchema}
      /> */}
      <div
        class="consult-form-area"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="container">
          <div className="row justify-content-center mt_50">
            <div className="col-md-11 col-lg-8 col-xl-6">
              <h3 className="form-title text-center">Contact Us</h3>
              <Formik
                initialValues={{
                  EMAIL: '',
                  MOBILE: '',
                  FNAME: '',
                  LNAME: '',
                }}
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
                    <div className="form_group multi-input">
                      <CustomField
                        className="mt_20"
                        type="text"
                        placeholder="FNAME"
                        name="FNAME"
                        value={values.FNAME}
                        onChange={e => setFieldValue('FNAME', e.target.value)}
                      />

                      <CustomField
                        className="mt_20"
                        type="text"
                        placeholder="Working from (location)"
                        name="LNAME"
                        value={values.LNAME}
                        onChange={e => setFieldValue('LNAME', e.target.value)}
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
                        value={values.mobile}
                        onChange={e => setFieldValue('MOBILE', e.target.value)}
                      />
                    </div>

                    <div className="form-submit-btn mt_50 text-center">
                      <button type="submit">Submit</button>
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

export default ContactUs;

// <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://thansyn.us20.list-manage.com/subscribe/post?u=a9ccacb7a86858499c8014209&amp;id=5da6572e1b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-FNAME">First Name  <span class="asterisk">*</span>
// </label>
// 	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
// </div>
// <div class="mc-field-group size1of2">
// 	<label for="mce-PHONE">Phone Number </label>
// 	<input type="text" name="PHONE" class="" value="" id="mce-PHONE">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-LOCATION">LOCATION </label>
// 	<input type="text" value="" name="LOCATION" class="" id="mce-LOCATION">
// </div>
// <div class="mc-field-group input-group">
//     <strong>Topics </strong>
//     <ul><li><input type="checkbox" value="1" name="group[5501][1]" id="mce-group[5501]-5501-0"><label for="mce-group[5501]-5501-0">Automate and delegate to machines</label></li>
// <li><input type="checkbox" value="2" name="group[5501][2]" id="mce-group[5501]-5501-1"><label for="mce-group[5501]-5501-1">Protect, preserve and defend</label></li>
// <li><input type="checkbox" value="4" name="group[5501][4]" id="mce-group[5501]-5501-2"><label for="mce-group[5501]-5501-2">Manage and decide</label></li>
// <li><input type="checkbox" value="8" name="group[5501][8]" id="mce-group[5501]-5501-3"><label for="mce-group[5501]-5501-3">Sense, connect and share</label></li>
// <li><input type="checkbox" value="16" name="group[5501][16]" id="mce-group[5501]-5501-4"><label for="mce-group[5501]-5501-4">Engage society</label></li>
// <li><input type="checkbox" value="32" name="group[5501][32]" id="mce-group[5501]-5501-5"><label for="mce-group[5501]-5501-5">Invest in technology and services</label></li>
// </ul>
// </div>
// 	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a9ccacb7a86858499c8014209_5da6572e1b" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>

// <!--End mc_embed_signup--></li>
