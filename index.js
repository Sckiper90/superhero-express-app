import express from 'express'
import mongoose from 'mongoose'
import router from './Router.js'
import fileUpload from 'express'
import config from 'config'

const dbUsername = process.env.DB_USERNAME || config.get('db.username');
const dbPassword = process.env.DB_PASSWROD || config.get('db.password');
const dbName = process.env.DB_NAME || config.get('db.name');

const PORT = 5001
const DB_URL = `mongodb+srv://${dbUsername}:${dbPassword}@superherodb.nvgfri5.mongodb.net/${dbName}?retryWrites=true&w=majority`

console.log(DB_URL);

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(
            DB_URL,
            {
              useUnifiedTopology: true,
              useNewUrlParser: true,
            }
          );
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
    } catch(err) {
        console.log(err)
    }
}

startApp()