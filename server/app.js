import express from 'express'
import fileUpload from 'express-fileupload'
import postRoutes from './routes/posts.routes.js'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

app.use(postRoutes)
app.use(express.static(join(__dirname, '../client/build')))

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../client/build/index.html'))
})

export default app

