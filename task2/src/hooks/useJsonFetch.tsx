import { useEffect, useState } from 'react'

type DataType = {
  status: string
}

function useJsonFetch (url: string): [DataType, string, boolean] {
  const [data, setData] = useState<DataType>({ status: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(async response => {
        if (!response.ok) {
          throw Error('Error: ' + response.statusText)
        }
        return await response.json()
      })
      .then((data: DataType) => {
        setData(data)
        setLoading(false)
      })
      .catch((err: Error) => { setError(err.message) })
  }, [])

  return [data, error, loading]
}

export default useJsonFetch
