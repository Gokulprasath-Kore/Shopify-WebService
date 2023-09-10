const axios = require('axios');
const cartviewingqueryfunction = require("../graphql/GuestCartViewingQuery");

const guestcartviewingcontroller = (req, res) => {
  
    const cartUrl = req.params.cartUrl;
    const endpoint = `https://${req.domain}/api/2022-04/graphql.json`;
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': req.storeFrontAccessToken
    };
  
    const body = {
      query: cartviewingqueryfunction(cartUrl)
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

module.exports = guestcartviewingcontroller;
