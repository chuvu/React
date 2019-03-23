import React from 'react';
import ReactDOM from 'react-dom';
import { Bingo } from './pages/bingo.js';

const mountNode = document.getElementById('mountNode');

const App = () => (
        <div>     
            <Bingo />                    
        </div>
    
);

ReactDOM.render(<App />, mountNode);
