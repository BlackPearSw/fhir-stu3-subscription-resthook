const metadata = require('../config/metadata.json');
const package =  require('../../package.json');

metadata.software.name = package.name;
metadata.software.version = package.version;

module.exports = function(){
    return function(req, res, err){
        res.send(metadata);
    }
};