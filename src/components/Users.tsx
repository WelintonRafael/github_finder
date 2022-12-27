
import { UsersProps } from '../types/users'
import {MdLocationPin} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Users = ({
  login,avatar_url, fallowers ,fallowing , location}:
  UsersProps) => {


  return (
    <div>
      <img src={avatar_url} alt={login}/>
      <h2>{login}</h2>
      <p>
        <MdLocationPin />
        <span>
          {location}
        </span>
      </p>
      <div>
        <p>Seguidores:</p>
        <p>{fallowers}</p>
      </div>
      <div>
      <p>Seguidores:</p>
        <p>{fallowing}</p>
      
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

export default Users