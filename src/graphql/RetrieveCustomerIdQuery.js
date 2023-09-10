function retrievecustomeridqueryfunction(accessToken){
    return(  `
    {
      customer(customerAccessToken: "${accessToken}") {
        id
        firstName
      }
    }
  `);
}

    
  module.exports = retrievecustomeridqueryfunction;