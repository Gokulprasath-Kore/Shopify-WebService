const axios = require('axios');

const orderhistorycontroller =  async (req, res) => {

    const apiKey = req.header('apiKey');
    const apiPassword = req.header('apiPassword');
    const domain = req.header('domain');
    const customerId = req.params.customerId;
    var flag = 0;
    if(apiKey!="" && apiPassword!="" && domain!="")
    {
        req.domain = domain;
        req.apiKey = apiKey;
        req.apiPassword = apiPassword;
        flag = 1;
    }
    else{
        flag = 0;
    }
    if(flag==1)
    {
        try {
            const response = await axios.get(
              `https://${domain}/admin/api/2022-04/customers/${customerId}/orders.json`,
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Basic ${Buffer.from(`${apiKey}:${apiPassword}`).toString('base64')}`,
                },
              }
            );
        
            if (response.status === 200) {
              const data = response.data;
              res.json(data);
            } else {
              res.status(response.status).send(response.data);
            }
          } 
          catch (error) {
            if (error.response) {
              res.status(error.response.status).send(error.response.data);
            } else {
              console.error('Error:', error.message);
              res.status(500).send('Internal Server Error');
            }
          }
    }
    else{
        res.status(response.status).send("Unauthorized Access");
    }
    
  };


module.exports = orderhistorycontroller;