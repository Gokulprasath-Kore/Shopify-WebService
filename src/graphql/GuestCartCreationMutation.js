function cartcreationmutationfunction(createCartURL){
    return(`
    mutation {
    cartCreate(
        input: {
        lines: [
            {
            quantity: 1
            merchandiseId: "${createCartURL}"
            }
        ],
        buyerIdentity: {
            email: "mike@eznet.com",
            countryCode: US
        },
        attributes: {
            key: "cart_attribute",
            value: "This is a cart attribute"
        }
        }
    ) {
        cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
            edges {
            node {
                id
                merchandise {
                ... on ProductVariant {
                    id
                }
                }
            }
            }
        }
        buyerIdentity {
            __typename
        }
        attributes {
            key
            value
        }
        }
    }
    }
    `);
}

    
  module.exports = cartcreationmutationfunction;