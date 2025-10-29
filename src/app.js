import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    // allows cookies/auth headers to flow between frontend & backend.
  })
);

app.use(
  //lets your server understand JSON data from the client (like { "name": "Juhi" }).
  express.json({
    limit: "6kb",
  })
);

app.use(
  //parses data sent in the body of a request when it comes from an HTML form (like <form method="POST">).
  express.urlencoded({
    extended: true, //allows parsing of nested objects
    limit: "16kb",
  })
);

app.use(cookieParser());

app.use(express.static("public"));

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register
export {app};
