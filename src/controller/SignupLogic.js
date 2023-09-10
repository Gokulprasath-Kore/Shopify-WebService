const axios = require('axios');

const signupcontroller =  (req, res) => {
    const {
        fname,
        lname,
        mail,
        pass,
        pconfirm,
        address,
        city,
        province,
        country,
        zip,
        phone,
    } = req.body;
  // Endpoint to create a customer
  const createCustomerEndpoint = `https://${req.domain}/admin/api/2023-07/customers.json`;
  
  // Customer data
  const customerData = {
    customer: {
        first_name: fname,
        last_name: lname,
        email:mail,
        addresses: [
            {
                address1: address,
                city: city,
                province: province,
                country: country,
                zip: zip,
                phone:phone
            }
        ],
        password:pass,
        password_confirmation:pconfirm // Add password_confirmation field
    }
  };
  console.log(customerData);
  // Create a new customer account
  axios.post(createCustomerEndpoint, customerData, {
    auth: {
        username: req.apiKey,
        password: req.adminApiAccessToken
    }
  })
  .then(response => {
    res.send('Customer created successfully:' + JSON.stringify(response.data.customer));
  })
  .catch(error => {
    res.send(error.response.data.errors);
  });
  }

module.exports = signupcontroller;