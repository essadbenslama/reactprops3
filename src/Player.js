import React from 'react';
import Card from 'react-bootstrap/Card';

export const Player = ({playerinfo}) => {

  return (
    <div>
<Card style={{ width: '20rem' ,flexWrap:"wrap-reverse"}}>
      <Card.Img variant="top" src={playerinfo.imageUrl} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>{playerinfo.name}</Card.Title>
        <Card.Text>
          age :{playerinfo.age}
        <p>his team :{playerinfo.team}</p>
        <p>nationality: {playerinfo.nationality}</p>
        <p>jerseyNumber :{playerinfo.jerseyNumber}</p>
        </Card.Text>
 
      </Card.Body>
    </Card>
   
    </div>
  )
}
Player.defaultProps ={name:"Hannibal mejbri"};
Player.defaultProps ={age:"21"}