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
      }).then((user) => {
          if(user[0]){
            let {email, password } = user[0].dataValues;
          token(email, password).then(token => {
              res.status(200).send({ accessToken: token })
          })} else {
              res.status(404).send('아이디와 비밀번호 확인')
          }
      })
    }catch(error) {
        console.log(error)
    }
}

module.exports = signin;