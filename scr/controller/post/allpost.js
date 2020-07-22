const sequelize = require ('../../models');
const { Post, Comments, User } = sequelize;
//최대 10 개의 post정보와 댓글, 유저의 정보를 가져와 준다.
const allPost = async function(req, res) {
    try{
       await Post.findAll({
           include: [
               {
                model: Comments,
               },{
                model: User
               }
           ]
       }).then(result => {
           res.send(result)
       })
    }catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = allPost