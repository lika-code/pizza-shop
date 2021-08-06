import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components/';
import { Home, Cart } from './pages/';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/db.json')
			.then((resp) => resp.json())
			.then((json) => {setItems(json.pizzas)});
	}, []);

	console.log(items);
	
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Route exact path='/' render={() => <Home items={items} />} />
				<Route exact path='/cart' component={Cart} />
			</div>
		</div>
	);
}

export default App;
