const express = require("express");
const jwt = require('jsonwebtoken');

  const getToken = (password) => {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
        //   email: email,
          password: password     // 유저 정보
        },
        
        'SeCrEtKeYfOrHaShInG',   // secrec Key
        
        {
          expiresIn: '7d',
          issuer: 'inyongTest',   // options
          subject: 'userInfo'
        }, 
        
        function(err,token){
          if(err) reject(err)      // callback
          else resolve(token)
        }
      )
    });
  } 
  
module.exports = getToken;