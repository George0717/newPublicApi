import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import UserRoute from './routes/UserRouet.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(UserRoute)
mongoose.connect('mongodb://localhost:27017/fullstack_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
const db = mongoose.connection
db.on('error', (error) => console.log('error'))
db.once('open', () => console.log("Database Connected") )



app.listen(5000, () => console.log("server running"))