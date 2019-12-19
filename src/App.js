import React from 'react';
import Tabs from './components/tabs/Tabs'
import './App.css';

const tabsData = [
  { title: 'Home', content: 'home content' },
  { title: 'Movies', content: 'moview content' },
  { title: 'Music', content: 'music content' },
  { title: 'Photos', content: 'photos content' },
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
