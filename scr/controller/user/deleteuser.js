const sequelize = require ('../../models');
const { Post, Comments, User } = sequelize;

const deleteUser = async function(req, res) {
    const { userId } = req.params
    try{
       await User.destroy({
        //    where: {id: req.body.user_Id},
        where:{ id: userId}
       }).then(result => {
           res.send('삭제')
       })
    }catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = deleteUser