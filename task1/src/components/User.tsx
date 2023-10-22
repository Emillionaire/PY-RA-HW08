import type { UserDataType } from '../App'

type UserProps = {
  user: UserDataType
  active: boolean
  onShowDetails: (id: number) => void
}

function User ({ user, active, onShowDetails }: UserProps): JSX.Element {
  return (
    <li className={`list-group-item ${active ? ' active' : ''}`} onClick={() => { onShowDetails(user.id) }}>{user.name}</li>
  )
}

export default User
