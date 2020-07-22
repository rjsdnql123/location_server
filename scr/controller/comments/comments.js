const sequelize = require ('../../models');
const { Comments } = sequelize;
console.log('지나가니니')
const comments = async function(req, res) {
  console.log('통과')
    try{
        console.log(req.body,'body')
        const { userId } = req.body;
      await Comments.create({
        User_Id: userId,
        post_Id: req.body.postId,
        Contents: req.body.Contents
      }).then((result) => {
          console.log(result)
          res.send(result)
      })
    }catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = comments