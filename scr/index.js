const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentsRouter = require('./routes/comments')
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db 실행
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

app.use('/user',userRouter)
app.use('/post',postRouter)
app.use('/comments',commentsRouter)
// simple route
app.use("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT =  8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});