function newuser(req,res,next){
    const domain = req.header('domain');
    const adminApiAccessToken = req.header('adminApiAccessToken');
    const apiKey = req.header('apikey')
    if(domain!="" && adminApiAccessToken!="" && apiKey!="")
    {
        req.domain = domain;
        req.adminApiAccessToken = adminApiAccessToken;
        req.apiKey = apiKey;
        next();
    }
    else{
        res.status(401).send("Unauthorized Access");
    }
}

module.exports = newuser;