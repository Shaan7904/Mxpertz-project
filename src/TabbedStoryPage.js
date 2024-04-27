import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TabbedStoryCard from './TabbedStoryCard';

function TabbedStoryPage() {
  const [stories, setStories] = useState({});

  useEffect(() => {
    axios.get('https://child.onrender.com/api/sciencefiction/fid')
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
  }, []);

  return (
    <div className="tabbed-container">
      <div className="tab">
        <input type="radio" id="tab1" name="tabGroup1" defaultChecked />
        <label htmlFor="tab1">Tab 1</label>

        <div className="content">
          {stories.tab1 && stories.tab1.map(story => (
            <TabbedStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      <div className="tab">
        <input type="radio" id="tab2" name="tabGroup1" />
        <label htmlFor="tab2">Tab 2</label>

        <div className="content">
          {stories.tab2 && stories.tab2.map(story => (
            <TabbedStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      <div className="tab">
        <input type="radio" id="tab3" name="tabGroup1" />
        <label htmlFor="tab3">Tab 3</label>

        <div className="content">
          {stories.tab3 && stories.tab3.map(story => (
            <TabbedStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabbedStoryPage;