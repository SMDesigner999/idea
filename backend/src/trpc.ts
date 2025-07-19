import { initTRPC } from '@trpc/server'

const trpc = initTRPC.create()
const ideas = [
  { id: 1, nick: 'Hello', name: 'idea 1 ', description: 'idea 1....' },
  { id: 2, nick: 'Hello', name: 'idea 2 ', description: 'idea 2....' },
  { id: 3, nick: 'Hello', name: 'idea 3 ', description: 'idea 3....' },
  { id: 4, nick: 'Hello', name: 'idea 4 ', description: 'idea 4....' },
  { id: 5, nick: 'Hello', name: 'idea 5 ', description: 'idea 5....' },
]
if (true) console.log(ideas)
export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})
export type TrpcRouter = typeof trpcRouter
