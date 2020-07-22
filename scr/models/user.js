const post = require('./post');
const comment = require('./comments');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      }
    });
    // User.associate = function(models) {
    //   User.belongsTo(models.post, {
    //   foreignKey: 'post_Id'
    //   })
    //   };
    User.associate = function (models) {
      User.hasMany(models.Comments, {
        foreignKey: 'User_Id',
        onDelete: 'cascade'
      })
      User.hasMany(models.Post, {
        foreignKey: 'User_Id',
        onDelete: 'cascade'
      })
    }
    // User.associate = function (models) {
    // }

    return User;
  };