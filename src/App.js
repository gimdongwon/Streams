import React from 'react';
import './App.css';
import GameRoom from './components/GameRoom';

function App() {
	return (
		<div className="App">
			<header className="header">
				<h1>Streams</h1>
			</header>
			<GameRoom />
		</div>
	);
}

export default App;
