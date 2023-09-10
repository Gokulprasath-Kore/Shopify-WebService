function storemiddleware(req,res,next){
    const domain = req.header('domain');
    const storeFrontAccessToken = req.header('storeFrontAccessToken');
    
    if(domain!="" && storeFrontAccessToken!="")
    {
        req.domain = domain;
        req.storeFrontAccessToken = storeFrontAccessToken;
        next();
    }
    else{
        res.status(401).send("Unauthorized Access");
    }
}

module.exports = storemiddleware;