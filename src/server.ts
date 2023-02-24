import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() => {
    console.log('Server running at 3333')
  })
