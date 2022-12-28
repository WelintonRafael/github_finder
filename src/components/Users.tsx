
import { UsersProps } from '../types/users'
import {MdLocationPin} from 'react-icons/md'
import { Link } from 'react-router-dom'
import classes from './Users.module.css';



const Users = ({
  login,avatar_url, followers ,following, location}:
  UsersProps) => {


  return (
    <div className={classes.users}>
      <img src={avatar_url} alt={login}/>
      <h2>{login}</h2>
    {location &&(
        <p className={classes.location}>
        <MdLocationPin />
        <span>
          {location}
        </span>
      </p>
    )}
    <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
        <p>Seguidores:</p>
          <p className={classes.number}>{following}</p>
        
        </div>
    </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

export default Users