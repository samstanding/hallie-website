const rejectUnauthenicated = (req, res, next) => {
    //checks if logged in
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendStatus(403);
    }
};

module.exports = {rejectUnauthenicated};