import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StoryList from './StoryList';
import TabbedStoryPage from './TabbedStoryPage';

function App() {
  return (
    <Routes>
      
          <Route exact path="/" element={<StoryList/>} />
          <Route path="/tabbed-page" element={<TabbedStoryPage/>} />
      
    </Routes>
  );
}

export default App;