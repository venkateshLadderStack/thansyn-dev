import axios from 'axios';

const handler = async (event, context) => {
  const listId = '5da6572e1b';
  const apiKey = 'f37721f174d3ac62751d600a0840ee23-us20';
  const body = JSON.parse(event.body);
  const { email_address } = body;
  if (!email_address) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Please provide an email address.' }),
    };
  }

  try {
    const payload = {
      ful_name,
      email_address,
      status: 'subscribed',
    };
    const { data } = await axios.post(
      `https://us20.api.mailchimp.com/3.0/lists/${listId}/members`,
      payload,
      {
        headers: {
          Authorization: `Basic ${apiKey}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

export { handler };