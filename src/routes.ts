import express from 'express'
import { isValidURL } from './utils'

const routes = express.Router()

routes.post('/short', (req, res) => {
  if (req.body) {
    const { origUrl } = req.body
    if (origUrl) {
      if (isValidURL(origUrl)) {
        return res.status(200)
          .json({ origUrl })
      } else {
        return res.status(500)
          .send('Invalid url')
      }
    } else {
      return res.status(500)
        .send('No Url to shorten')
    }
  } else {
    return res.status(500)
      .send('No Body')
  }
})

routes.get('/short', (req, res) => {
  console.log('get', '/short')
})

export {
  routes
}