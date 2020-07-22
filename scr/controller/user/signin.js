const sequelize = require ('../../models');
const { User } = sequelize;
const token = require ('../../token/getToken')

const signin = async function(req, res) {
    console.log(req.body)
    try{
      await User.findAll({
          where: {email: req.body.email, password: req.body.password}
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