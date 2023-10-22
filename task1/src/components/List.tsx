import User from './User'
import type { UserDataType } from '../App'

type ListProps = {
  userList: UserDataType[]
  activeUser: number
  onActiveUserChange: (id: number) => void
}

function List ({ userList, activeUser, onActiveUserChange }: ListProps): JSX.Element {
  return (
        <ul className="list-group">
            {userList.map((user) => <User key={user.id} active={activeUser === user.id} user={user} onShowDetails={(id) => { onActiveUserChange(id) }}/>)}
        </ul>
  )
}

export default List
