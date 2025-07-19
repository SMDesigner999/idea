import { trpc } from '../../lib/trpc'
export const AllIdeasPage = () => {
  const { data, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()
  if (isLoading) return <div>Loading...</div>
  if (isFetching) return <div>Fetching...</div>
  if (isError) return <div>Error</div>

  return (
    <div>
      <h1>App</h1>
      {data &&
        data.ideas.map((idea) => (
          <div key={idea.id}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
            <p>{idea.nick}</p>
          </div>
        ))}
    </div>
  )
}
