import React from 'react';

import Random from './components/Random_V1';
import Tag from './components/Tag_V1';

import './App.css';

const App = () => (
    <div>
        <h1>Random GIF App</h1>
        <div className="main-container">
            <Random />
            <Tag />
        </div>
    </div>
);

export default App;

// resume
// 2point
// 3 tools tech: REACTJS, API, AXIOS, HOOKS 