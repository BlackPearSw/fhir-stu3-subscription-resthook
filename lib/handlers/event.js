var write = require('../utils/write');

module.exports = function(statusCode){
    return function(req, res, err){
        if (statusCode){
            return res.sendStatus(statusCode);
        }

        write('Received event', req.params.id);
        res.sendStatus(201);
    }
};