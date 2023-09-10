const axios = require('axios');
const cartcreationmutationfunction = require("../graphql/GuestCartCreationMutation");

const guestcartcreationcontroller = (req, res) => {

  const productId = req.params.productId;
  const createCartURL = "gid://shopify/ProductVariant/"+productId;
  const endpoint = `https://${req.domain}/api/2022-04/graphql.json`;
  
  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': req.storeFrontAccessToken
  };

  const body = {
    query:cartcreationmutationfunction(createCartURL)
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


module.exports = guestcartcreationcontroller;