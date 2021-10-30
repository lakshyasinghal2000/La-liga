import React from 'react';
import { Link } from 'react-router-dom';


import './MatchSmallCard.scss';
export const MatchSmallCard = ({match, teamName}) => {
  if(!match) return null;
  const otherTeam = match.team1===teamName ?   match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  
  var isMatchWon = 'MatchDetailCard won-card';
  if(teamName === match.ftr){
    isMatchWon='MatchDetailCard won-card';
  }
  else if(match.ftr==="Draw"){
    isMatchWon='MatchDetailCard draw-card';
  }
  else{
    isMatchWon='MatchDetailCard lost-card';
  }
  return (

    <div className={isMatchWon}>
      <div>
      <span className="vs">vs</span>
      <h3><Link to={otherTeamRoute}>{otherTeam}</Link> </h3>
      <h3>Scoreline {match.fthg} - {match.ftag}</h3>
      <h3>MatchResult={match.ftr}</h3>
      </div>
    </div>
  );
}

