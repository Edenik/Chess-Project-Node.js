const express = require("express");
const mongoose = require("mongoose");
// const http = require("http");
// const io = require("socket.io");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
// const bodyParser = require('body-parser');
// const { chmod } = require('fs');
const userRouter = require("./routes/userRoutes");

const app = express();
// http.createServer(app);
// io(http);

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

dotenv.config({ path: "./config.env" });

// app.use(bodyParser.urlencoded({ extended: false }));

//DB connection
const url = process.env.DATABASE_LOCAL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB CONNECTION SUCCESSFUL"))
  .catch((err) => console.log(err));

// use routes
app.use("/users", userRouter);

//socket
const rooms = [
  {
    roomID: "klsjdhf23",
    players: [{ black: "asdkjfasue" }, { white: "asdfasd" }],
  },
];

app.post("/get-room", (req, res) => {
  const { userID } = req.body;
  const lastRoom = rooms[rooms.length - 1];
  if (lastRoom.players.length === 2) {
    rooms.push({ roomID: "RandomRoomNumber", players: [{ black: userID }] });
  } else {
    rooms[rooms.length - 1].players.push({ white: userID });
  }
  res.send({ roomID });
});

// io.on("connection", (socket) => {
//   console.log(socket.rooms);

//   console.log("a user connected");
// });

// SERVER RUN
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
