const sequelize = require ('../../models');
const { Post, Comments, User } = sequelize;
//위치를 기반으로 같은 지역의 글을 불러온다
const location_Post = async function(req, res) {
    try{
        const {userId} = req.query
        const location = await userId_location(userId);
        console.log(location,'aa')
        // const { location } = req.query
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

const userId_location = async function(userId) {
    try{ 
        const userLocation = await User.findAll({
            where: {id: userId}
        }).then((result) => {
            console.log(result[0].dataValues.location,'결과')
            return result[0].dataValues.location
        })
        return userLocation
    } catch(error) {
        console.log(error,' error')
    }
}

module.exports = location_Post