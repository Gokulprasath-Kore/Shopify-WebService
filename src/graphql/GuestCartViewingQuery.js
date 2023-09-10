function cartviewingqueryfunction(cartUrl){
    return(`
    query {
      cart(id: "gid://shopify/Cart/${cartUrl}") {
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
              quantity
            }
          }
        }
      }
    }
  `);
}

    
  module.exports = cartviewingqueryfunction;