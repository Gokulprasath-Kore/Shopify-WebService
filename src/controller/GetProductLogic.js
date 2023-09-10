const axios = require('axios');

const getproductcontroller = (req, res) => {
    const url = `https://${req.domain}/admin/api/2022-04/products.json`;
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': req.adminApiAccessToken
    };
    
    axios.get(url, { headers })
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        console.error('Error:', error.message);
        res.status(500).send('An error occurred');
      });
  };

  module.exports = getproductcontroller;