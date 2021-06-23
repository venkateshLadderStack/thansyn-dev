import React from 'react';
import ContactForm from '../components/ConnectWithAnAnalyst/ContactForm';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as Yup from 'yup';

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

      <ContactForm
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
      />
    </Layout>
  );
};

export default ContactUs;
