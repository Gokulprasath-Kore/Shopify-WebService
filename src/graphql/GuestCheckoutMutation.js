function checkoutmutationfunction(checkoutURL){
    return( `
    mutation {
      checkoutCreate(input: {
        lineItems: [
          {
            variantId: "${checkoutURL}",
            quantity: 1
          }
        ],
        email: "mike@eznet.com",
        shippingAddress: {
          firstName: "Johnny",
          lastName: "Applesead",
          address1: "13506 E Farwell Rd",
          address2: "",
          city: "Spokane",
          province: "Washington",
          country: "United States",
          zip: "99217"
        }
      }) {
        checkout {
          id
          webUrl
        }
      }
    }
    `);
}

    
  module.exports = checkoutmutationfunction;