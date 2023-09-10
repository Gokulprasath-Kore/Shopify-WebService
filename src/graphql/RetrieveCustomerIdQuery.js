function retrievecustomeridqueryfunction(accessToken){
    return(  `
    {
      customer(customerAccessToken: "${accessToken}") {
        id
      }
    }
  `);
}

    
  module.exports = retrievecustomeridqueryfunction;