import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'
import cors from 'cors'

const expressApp = express()
// expressApp.use(express.json())
expressApp.use(cors())
expressApp.get('/ping', (req, res) => {
  res.send('Hello World!')
})

expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
    createContext: () => ({}),
  })
)
expressApp.listen(3000, () => {
  console.log('Example app listening on port http://localhost:3000')
})
