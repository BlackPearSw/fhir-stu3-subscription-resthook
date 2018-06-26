module.exports = function(options){
  return function(req, res, next){
      if (req.header(options.header) !== options.value){
          return next({status: 401});
      }

      next();
  }
};