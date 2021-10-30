import React from 'react';
import { Link } from 'react-router-dom';
import "./MatchDetailCard.scss";


export const MatchDetailCard = ({match, teamName}) => {
  if (!match) return null;
  const otherTeam = match.team1===teamName ?   match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  // const l = `/teams/${teamName}/matches/${2021}`;
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
      <h1><Link to={otherTeamRoute}> {otherTeam}</Link></h1>
      <h2>{match.date}</h2>
      <h3>Scoreline {match.fthg} - {match.ftag}</h3>
      <h3>Match Result = {match.ftr}</h3>
      </div>
      <div className="more-link">
      {/* <Link to={l}>More </Link> */}
      </div>
    </div>
  );
}

