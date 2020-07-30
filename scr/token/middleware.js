const jwt = require('jsonwebtoken');
require('dotenv').config();
const middleware = async function(req, res) {
    console.log(req.headers.authorization)
    // const token = req.headers.authorization.split('Bearer ')[1]; // client에게서 받은 토큰
    const token = req.headers.authorization; // client에게서 받은 토큰
  /* 토큰이 없으면 403 에러 응답 처리 */
  if(!token){
      console.log('토큰 없음')
    return res.status(403).send({  
      success: false,
      message: 'not logged in'
    });
  }
  /* 토큰 유효성 검사 */
  const p = new Promise((resolve, reject) => {
      console.log('토큰 유효성 검사', process.env.ACCESS_TOKEN_SECRET)
      console.log('토큰',token)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
      if(err) {
        console.log(err,'err')
        res.status(204).send("err")
        return reject(err)
    }else {
        console.log('통과?')
       return resolve(decoded)};
    })
  });
  /* 유효하지 않은 토큰으로 403 에러 처리 */
  const onError = (error) => {
      console.log('error발생')
      console.log(error)
    res.status(403).send({
      success: false,
      message: error.message
    })
  };

  p.then((decoded)=>{
    console.log('여긴 뭔지 모르겠음',decoded)
    res.send(decoded);
  }).catch(onError);
}

module.exports = middleware