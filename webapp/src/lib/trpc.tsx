import type { TrpcRouter } from '@ideanick/backend/src/trpc'
import { createTRPCReact } from '@trpc/react-query'
import { httpBatchLink } from '@trpc/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export const trpc: ReturnType<typeof createTRPCReact<TrpcRouter>> = createTRPCReact<TrpcRouter>()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})
const trpcClient = trpc.createClient({
  links: [httpBatchLink({ url: 'http://localhost:3000/trpc' })],
})

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
