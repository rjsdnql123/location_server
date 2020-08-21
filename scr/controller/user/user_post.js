const sequelize = require ('../../models');
const { Post, Comments, User } = sequelize;

const user_post = async function(req, res) {
    const {userId} = req.query
    console.log(userId,'userId')
    try{
        await Post.findAll({
            where: {User_Id: userId}
        }).then(result => {
            console.log(result)
            res.send(result)
        })
    }catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = user_post;