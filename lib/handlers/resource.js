var write = require('../utils/write');

module.exports = function(statusCode){
    return function(req, res, err){
        if (statusCode){
            return res.sendStatus(statusCode);
        }

        if (req.params.id !== req.body.id){
            throw {status: 400};
        }

        write('Received', req.params.type, req.params.id);
        write(JSON.stringify(req.body, null, '\t'));
        res.sendStatus(200);
    }
};