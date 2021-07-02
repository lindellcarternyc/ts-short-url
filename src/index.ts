import express from 'express'

import { routes } from './routes'

const PORT = 8314

const app = express()

app.use(express.json())

app.use('/api', routes)

app.use('/', (req, res) => {
  res.status(200)
    .send('Welcome to ts-short-url')
})

app.listen(PORT, () => {
  console.log(`App is listening on PORT=${PORT}`)
})