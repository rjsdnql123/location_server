
module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
      Contents: {
        type: Sequelize.STRING
      },
    });

    Comments.associate = function(models){
      Comments.belongsTo(models.Post, {
        foreignKey: "post_Id"
      });
      Comments.belongsTo(models.User, {
          foreignKey: 'User_Id'
          })
    };
    return Comments;
  };