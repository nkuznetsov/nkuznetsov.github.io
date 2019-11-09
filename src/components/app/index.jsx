import React from 'react';
import oyster from '../../assets/images/oyster.svg';

function App() {
	return (
		<div className="app">
			<p>Just a fluffy oyster here for now</p>
			<img src={oyster} className="oyster" alt="oyster" />
		</div>
	);
}

export default App;
