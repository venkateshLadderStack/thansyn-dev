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
  location: Yup.string()
    .min(2, 'name is too sort')
    .max(30, 'must be 15 character or less')
    .required('enter your working location'),
  mobile: Yup.string()
    .max(10, 'mobile number should be 10 digit')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('phone number is required'),
  email: Yup.string().email('invalid email').required('email is required'),
  agree: Yup.boolean()
    .required('Need to agree terms and conditions')
    .oneOf([true], 'The terms and conditions must be accepted.'),
});

const ConnectWithAnAnalyst = () => {
  return (
    <Layout>
      <SEO title="Connect an analyst" />
      <ContactForm
        options={options}
        buttonLabel="Connect"
        title="Consult an analyst"
        termsAndConditions={true}
        initialValues={{
          type: '',
          location: '',
          adviceAndEvaluations: false,
          analysisAndReasearch: false,
          insights: false,
          EMAIL: '',
          mobile: '',
          agree: false,
        }}
        checkBoxes={checkBoxes}
        validationSchema={validationSchema}
      />
    </Layout>
  );
};

export default ConnectWithAnAnalyst;
