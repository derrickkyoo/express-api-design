import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import itemsRouter from './resources/items/items.router'

export const app = express()

app.disable('x-powered-by')

// Middleware
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// Custom middleware
const log = (req, res, next) => {
  console.log('Custom middleware')
  next()
}

// Example route
app.get('/', log, (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

// Registered subroutes
app.use('/api/items', itemsRouter)

export const start = () => {
  app.listen(3000, () => {
    console.log('Server listening on port: 3000')
  })
}
