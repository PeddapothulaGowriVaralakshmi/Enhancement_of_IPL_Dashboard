// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, id, imageUrl} = teamData

    return (
      <Link to={`/team-matches/${id}`} className="link-team">
        <li className="team-card">
          <img src={imageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
