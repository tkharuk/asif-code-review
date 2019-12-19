import React from 'react';
import Tabs from './components/tabs/Tabs'
import './App.css';

const tabsData = [
  { title: 'Home' },
  { title: 'Movies' },
  { title: 'Music' },
  { title: 'Photos' },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs items={tabsData} />
      </header>
    </div>
  );
}

export default App;
