require("dotenv").config();

const http = require("http");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const setWebSocket = require("./chat");

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();
const port = 8000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const followRouter = require("./routes/follow");
app.use("/follow", followRouter);

const feedRouter = require("./routes/feed");
app.use("/feed", feedRouter);

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

const chatsRouter = require("./routes/chats");
app.use("/chats", chatsRouter);

const server = http.createServer(app);

setWebSocket(server);

server.listen(port, () => {
  console.log(`API ready on port http://localhost:${port}/`);
});
