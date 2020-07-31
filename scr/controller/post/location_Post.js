const sequelize = require ('../../models');
const { Post, Comments, User } = sequelize;
//위치를 기반으로 같은 지역의 글을 불러온다
const location_Post = async function(req, res) {
    try{
        const { location } = req.query
       await Post.findAll({
           include: [
               {
                model: Comments,
                include: [{
                    model: User
                }]
               },{
                model: User, 
                where: {location: location}
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

module.exports = location_Post