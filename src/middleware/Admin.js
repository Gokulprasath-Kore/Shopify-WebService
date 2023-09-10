function adminmiddleware(req,res,next){
    const domain = req.header('domain');
    const adminApiAccessToken = req.header('adminApiAccessToken');
    
    if(domain!="" && adminApiAccessToken!="")
    {
        req.domain = domain;
        req.adminApiAccessToken = adminApiAccessToken;
        next();
    }
    else{
        res.status(401).send("Unauthorized Access");
    }
}

module.exports = adminmiddleware;