const post = require('./post');
const comment = require('./comments');
const crypto = require('crypto')
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
    },{
        timestamps: false,
  
        hooks: {
          afterValidate: (data) => {
            var shasum = crypto.createHash('sha1');
            let salt = 'random string';
            shasum.update(data.password + salt);
            data.password = shasum.digest('hex');
          },
        },
      }
    );

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


    return User;
  };