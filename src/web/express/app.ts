import express from 'express'
import carRouter from './routes/car-routes'
import errorHandlerMiddleware from './error-handler/error-handler-middleware'

const app =  express()
app.use(express.json())

app.use(carRouter)
app.use(errorHandlerMiddleware)

export default app