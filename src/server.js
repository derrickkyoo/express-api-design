import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

export const start = () => {}
