const sequelize = require ('../../models');
const { Post } = sequelize;

const post = async function(req, res) {
    try{
        console.log(req.body,'body')
        const { userId } = req.body;
      await Post.create({
        User_Id: userId,
        title: req.body.title,
        contents: req.body.Contents
      }).then((result) => {
          console.log(result)
          res.send(result)
      })
    }catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = post