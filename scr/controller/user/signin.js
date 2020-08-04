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
              console.log(user[0].dataValues,'이뭐냐v')
            let {id, email, password } = user[0].dataValues;
          token(id, email, password).then(token => {
              res.status(200).send({ accessToken: token, userId: id })
          })} else {
              res.status(404).send({error : '로그인실패'})
          }
      })
    }catch(error) {
        console.log(error)
    }
}

module.exports = signin;