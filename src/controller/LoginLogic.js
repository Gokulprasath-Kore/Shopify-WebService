const axios = require('axios');
const customerLoginMutation = require("../graphql/LoginMutation");
const retrievecustomeridqueryfunction = require("../graphql/RetrieveCustomerIdQuery");

const logincontroller = async (req, res) => {
  const { email, password } = req.body;
  global.customerId = null;

  try {
    const customerLoginMutationFunction = customerLoginMutation();
    const loginResponse = await axios.post(
      `https://${req.domain}/api/2023-04/graphql.json`,
      {
        query: customerLoginMutationFunction,
        variables: {
          email,
          password,
        },
      },
      {
        headers: {
          'X-Shopify-Storefront-Access-Token': req.storeFrontAccessToken,
        },
      }
    );

    const responseData = loginResponse.data.data.customerAccessTokenCreate;
    if (responseData.customerUserErrors && responseData.customerUserErrors.length > 0) {
      // Handle login errors
      const errorMessages = responseData.customerUserErrors.map((error) => error.message);
      res.status(400).json({ errors: errorMessages });
    } else if (responseData.customerAccessToken) {
      // Successfully logged in
      const { accessToken, expiresAt } = responseData.customerAccessToken;

      const getCustomerID = async () => {
        try {
          const query = retrievecustomeridqueryfunction(accessToken);

          const response = await axios.post(
            `https://${req.domain}/api/2023-04/graphql.json`,
            {
              query,
            },
            {
              headers: {
                'X-Shopify-Storefront-Access-Token': req.storeFrontAccessToken,
              },
            }
          );

          global.customerId = response.data.data.customer.id;
          console.log(`Customer ID: ${global.customerId}`);
        } catch (error) {
          console.error('Error retrieving customer ID:', error.message);
        }
      };

      // Call the function to retrieve the customer ID
      await getCustomerID();

      const cid = global.customerId;
      res.status(200).json({ cid, accessToken, expiresAt });
    } else {
      res.status(500).json({ error: 'Unknown error occurred during login' });
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Error logging in' });
  }
};

module.exports = logincontroller;
