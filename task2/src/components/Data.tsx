import useJsonFetch from '../hooks/useJsonFetch'

function Data (): JSX.Element {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/data')

  return (
        <div>{data.status}</div>
  )
}

export default Data
