const axios = require('axios');
const checkoutmutationfunction = require("../graphql/GuestCheckoutMutation");

const guestcheckoutcontroller = (req, res) => {
    
    const productId = req.params.productId;
    const checkoutURL = "gid://shopify/ProductVariant/"+productId;
    const endpoint = `https://${req.domain}/api/2022-04/graphql.json`;
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': req.storeFrontAccessToken
    };
  
    const body = {
      query:checkoutmutationfunction(checkoutURL)
    };
  
    axios.post(endpoint, body, { headers })
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  };

  module.exports = guestcheckoutcontroller;