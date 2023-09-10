const axios = require('axios');

const guestcancelordercontroller = async (req, res) => {
    
    const orderId = req.params.orderId;
    const cancelEndpoint = `https://${req.domain}/admin/api/2023-04/orders/${orderId}/cancel.json`; // Endpoint to cancel the order
    //const closeEndpoint = `https://${domain}/admin/api/2023-04/orders/${orderId}/close.json`;
    const archiveEndpoint = `https://${req.domain}/admin/api/2023-04/orders/${orderId}.json`; // Endpoint to archive the order
    //const updateEndpoint = `https://${domain}/admin/api/2023-04/orders/${orderId}.json`;
  
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': req.adminApiAccessToken
    };
  
    try {
      // Cancel the order
      const cancelResponse = await axios.post(cancelEndpoint, {}, { headers });
      const canceledOrder = cancelResponse.data.order;
  
      // Archive the order
      const archiveData = {
        order: {
          id: canceledOrder.id,
          archived: true
        }
      };
  
      // Make the archive request to close the order
      const archiveResponse = await axios.put(archiveEndpoint, archiveData, { headers });
      const archivedOrder = archiveResponse.data.order;
  
      res.send({ canceledOrder, archivedOrder, message: 'Order canceled and archived successfully.' });
    } catch (error) {
      console.error(error); // Log the error object for further inspection
      res.status(400).json({ error: error.message });
    }
  };

module.exports = guestcancelordercontroller;