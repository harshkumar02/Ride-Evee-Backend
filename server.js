import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectdb.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running....')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in mode on port ${PORT}`
  )
)
