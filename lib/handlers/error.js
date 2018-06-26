module.exports = function(){
    return function(err, req, res, next){
        if (res.headersSent) {
            return next(err)
        }
        res.sendStatus(err.status || 500);
    }
};