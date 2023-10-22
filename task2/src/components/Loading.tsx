import useJsonFetch from '../hooks/useJsonFetch'

function Loading (): JSX.Element {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/loading')

  return (
        <div>{loading ? 'Loading...' : 'Not loading'}</div>
  )
}

export default Loading
