import type { UserInfoType } from '../App'

type DetailsType = {
  info: UserInfoType | undefined
}

function Details ({ info }: DetailsType): JSX.Element {
  if (info) {
    return (
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={info.avatar} alt={info.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">City: {info.details.city}</li>
                    <li className="list-group-item">Company: {info.details.company}</li>
                    <li className="list-group-item">Position: {info.details.position}</li>
                </ul>
            </div>
    )
  }
  return <></>
}

export default Details
