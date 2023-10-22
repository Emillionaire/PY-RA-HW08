import { useEffect, useState } from 'react'
import List from './components/List'
import Details from './components/Details'
import './App.css'

type UserDataType = {
  id: number
  name: string
}

type DetailsType = {
  city: string
  company: string
  position: string
}

type UserInfoType = {
  id: number
  name: string
  avatar: string
  details: DetailsType
}

function infoUrl (id: number): string {
  return `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
}

function App (): JSX.Element {
  const [userList, setUserList] = useState<UserDataType[]>([])
  const [activeUser, setActiveUser] = useState(0)
  const [info, setInfo] = useState<UserInfoType>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    void fetch(import.meta.env.VITE_USER_LIST_ADDRESS)
      .then(async response => await response.json())
      .then((data: UserDataType[]) => { setUserList(data) })
  }, [])

  useEffect(() => {
    if (activeUser) {
      setLoading(true)
      void fetch(infoUrl(activeUser))
        .then(async response => await response.json())
        .then((data: UserInfoType) => {
          setInfo(data)
          setLoading(false)
        })
    }
  }, [activeUser])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <List userList={userList} activeUser={activeUser} onActiveUserChange={setActiveUser} />
        </div>
        {loading ? 'Loading...' : <div className="col"><Details info={info} /></div>}
      </div>
    </div>
  )
}

export default App
export type { UserDataType, UserInfoType }
