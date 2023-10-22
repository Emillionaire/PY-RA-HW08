import useJsonFetch from '../hooks/useJsonFetch'

function Error (): JSX.Element {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/error')

  return (
        <div>{error}</div>
  )
}

export default Error
