
import React from 'react';

function TabbedStoryCard({ story }) {
  return (
    <div className="card">
      <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.Title}  style={{height:'30px'}}/>
      <div className="card-body">
        <h5 className="card-title">{story.Title}</h5>
        <p className="card-text">{story.Description}</p>
      </div>
    </div>
  );
}

export default TabbedStoryCard;