import React from 'react';
import './ClubCard.css';
import { BsFillPersonPlusFill } from "react-icons/bs";

function addThumbnail(club) {
  if (club.thumbnail !== null) {
    return (<img src={club.thumbnail} alt={club.name + ' Logo'} className='club-thumbnail'/>)
  }
  else {
    return <BsFillPersonPlusFill className='club-thumbnail' />
  }
}

const ClubCard = ({ club }) => {
  return (
    <a key={club.id} href={'/explore/' + club.id} >
      <div className="club-card" >
        <div className="club-image-container" style={{ backgroundColor: club.background_color }}>
          {addThumbnail(club)}
        </div>
        <div className="club-details">
          <h2 className="club-name">{club.name}</h2>
          <p> Club Category </p>
        </div>  
      </div>
    </a>
  );
};

export default ClubCard;