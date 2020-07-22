const user = require('./user')
const Comments = require('./comments')
module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
      post_Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
      // userId: {
      //   type: Sequelize.STRING
      // },
      title: {
        type: Sequelize.STRING
      },
      contents: {
        type: Sequelize.STRING
      },
    });
    Post.associate = function (models) {
       Post.hasMany(models.Comments, {
      foreignKey: 'post_Id',
      onDelete: 'cascade'
    });
      Post.belongsTo(models.User, {
      foreignKey: 'User_Id'
      })
    };
    return Post;
  };