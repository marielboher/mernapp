// import express from 'express'
// import fileUpload from 'express-fileupload'
// import postRoutes from './routes/posts.routes.js'
// import { dirname, join } from 'path'
// import { fileURLToPath } from 'url'

// const app = express()
// const __dirname = dirname(fileURLToPath(import.meta.url))

// app.use(express.json())
// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: './upload'
// }))

// app.use(postRoutes)
// app.use(express.static(join(__dirname, '../client/build')))

// app.get('*', (req, res) => {
//     res.sendFile(join(__dirname, '../client/build/index.html'))
// })

// export default app

import express from "express";
import cors from "cors";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Permitir solicitudes POST a /posts
app.post("/posts", (req, res, next) => {
  res.send("POST request to /posts");
});

// Agregar tus rutas existentes
app.use("/api", require("./routes/posts.routes.js"));

export default app;
