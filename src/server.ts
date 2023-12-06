import { log } from "console";
import express from "express";
import "express-async-errors"
import morgan from "morgan"
import {getAll, getOneById, create, updateById, deleteById, createImage} from "./controllers/planets.js"
import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})


const TODO: string = "start writing your Express API server here :)";

console.log(TODO);

const app = express()
const port = 3000

app.use("/uploads", express.static("uploads"));

app.use(morgan("dev"));

app.get('/api/planets', getAll)

app.get('/api/planets/:id', getOneById)

app.post('/api/planets', create)

app.put('/api/planets/:id', updateById)

app.delete('/api/planets/:id', deleteById)

// app.post('/api/planets/:id/image', upload.single("image"), createImage)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
