const sequelize = require ('../../models');
const { Post, Comments, User } = sequelize;

const information = async function(req, res) {
    const {userId} = req.query
    console.log(userId,'userId')
    try{
        await User.findAll({
            where: {id: userId},
        }).then(result => {
            console.log(result)
            res.send(result)
        })
    }catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = information;