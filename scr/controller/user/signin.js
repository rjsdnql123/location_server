const sequelize = require ('../../models');
const { User } = sequelize;
const token = require ('../../token/getToken')
const crypto = require('crypto')
const signin = async function(req, res) {
    let { email, password } = req.body;
    var shasum = crypto.createHash('sha1');
    let salt = 'random string';
    shasum.update(password + salt);
    password = shasum.digest('hex');
    try{
      await User.findAll({
          where: {email: email, password: password}
      }).then((result) => {
          if(result[0]){
          token(result[0].dataValues.password).then(token => {
              res.send(token)
          })} else {
              res.status(404).send('아이디와 비밀번호 확인')
          }
      })
    }catch(error) {
        console.log(error)
    }
}

module.exports = signin;