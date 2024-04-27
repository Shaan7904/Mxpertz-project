import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoryCard from './StoryCard';

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('https://child.onrender.com/api/sciencefiction')
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
  }, []);

  return (
    <div >
      {stories.map(story => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}

export default StoryList;