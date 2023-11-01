const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
//encrypt senstive data(pwd) into hashing using bcryptjs
var bcrypt = require("bcryptjs");

//exports.signup(req,res)=>{}

exports.signin = (req, res) => {
    //var user={username:req.body.username,pwd:bcreq.body.pwd}
      const token = jwt.sign({ id: 123 },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });

      res.status(200).send({
        id: 123,
        username: "Test123",
        accessToken: token
      });
};