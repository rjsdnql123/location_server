const sequelize = require ('../../models');
const { Post, Comments, User } = sequelize;
//특정 게시글을 번호를 받으면 유저의 정보와 그 포스트의 글 댓글, 댓글쓴 유저의 정보를 가져와준다.
const getPost = async function(req, res) {
    try{
        const { postid } = req.query
        console.log(postid,'post')
        await Post.findAll({
            where: {post_Id: postid},
            include: [
            {
                model: Comments,
                include: [{
                    model: User
                }]
            },
            {
                model: User,
            }        
        ]
        }).then(result => {
            console.log(result,'통과요!!')
            res.send(result)
        })
    }catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = getPost