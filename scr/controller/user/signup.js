const sequelize = require ('../../models');
const { User } = sequelize;

const signup = async function(req, res) {
    console.log(req.body)
    try {
        await User.findOrCreate({
            where: {email: req.body.email},
            defaults: req.body
        }).then(([result, created]) => {
            if(!created) {
                res.status(404).send({
                    error: {
                        message: '중복되는 이메일입니다.'
                    }
                });
            }else {
                res.status(200).send(result);
            }
        })
    } catch (error) {
        console.log(error,'error')
        res.status(500).send(error)
    }
};

module.exports = signup