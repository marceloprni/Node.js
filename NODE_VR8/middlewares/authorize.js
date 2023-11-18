var authorize = {

    isNotAuth : function(req, res, next) {

        if (req.isAuthenticated()) {
          return res.redirect('/')
        }
    
        next();
    },

    isAuth : function(req, res, next) {

        if (!req.isAuthenticated()) {
          return res.redirect('/login')
        }
    
        next();
    }
};


module.exports = authorize;
