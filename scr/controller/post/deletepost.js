const sequelize = require ('../../models');
const { Post, Comments, User } = sequelize;
//최대 10 개의 post정보와 댓글, 유저의 정보를 가져와 준다.
const deletepost = async function(req, res) {
    try{
       await Post.destroy({
           where: {post_Id: req.body.post_Id},
        //    include: [{
        //        model: Comments
        //    }]
       }).then(result => {
           res.send('삭제')
       })
    }catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = deletepost