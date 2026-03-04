import cors from "cors";
import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://videocall-a9i6.onrender.com"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.options("*", cors());

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

connectToSocket(server);

app.set("port", process.env.PORT || 8080);

const start = async () => {
  await mongoose.connect(
    "mongodb+srv://amitpatel05_db_user:amit05patel19@videocall.nckuk4o.mongodb.net/videoCall?retryWrites=true&w=majority",
  );

  console.log("MongoDB Connected");

  server.listen(app.get("port"), () => {
    console.log(`Server running on PORT ${app.get("port")}`);
  });
};

start();
