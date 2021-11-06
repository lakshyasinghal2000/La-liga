import React, { useEffect , useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

import './TeamPage.scss';
export const TeamPage = () => {

  const [team, setTeam] = useState({matches:[]});
  const {teamName} = useParams();
  // const year = 2021;
  // const otherTeamRoute = `/teams/${teamName}/matches/${2021}`;
  const l = `/teams/${teamName}/matches/${2021}`;
  const r = `/teams`;
  useEffect(
    () => {
      const fetchMatches = async() =>{
        const response = await fetch(`http://localhost:8080/team/${teamName}`);
        const data = await response.json();
        
        setTeam(data);
        
      };
      fetchMatches();
    }, [teamName]
  );
  if(!team || !team.teamName){
    return <h1>Team Not Found</h1>
  }
  return (
    <div className="TeamPage">
      <div className="team-name-section">
      <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
            Wins / Losses /Draws
            <PieChart
                data={[
                    { title: 'Losses', value: team.totalLosses, color: '#a34d5d' },
                    { title: 'Wins', value: team.totalWins, color: '#4da375' },
                    { title: 'Draws', value: team.totalDraws, color: '#1a95bb' },
                ]}
                />
        </div>
        <div className="match-detail-section">
            <h3>Latest Matches</h3>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
        </div>
      {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName = {team.teamName} match={match}/>)}
    
      <div className="more-link">
      { <Link to={l}>More{'>'} </Link> }
      </div>
      <div className="more-link">
      { <Link to={r}>Homepage{'>'} </Link> }
      </div>
    </div>
  );
}

