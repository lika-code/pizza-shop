import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Header } from "./components/";
import { Home, Cart } from "./pages/";
import { setPizzas } from './redux/actions/pizzas'



function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({data}) => {
			dispatch(setPizzas(data.pizzas));
		})
	}, []);

return (
		<div className="wrapper">
				<Header />
				<div className="content">
						<Route exact path="/" component={Home}  />
						<Route exact path="/cart" component={Cart} />
				</div>
		</div>
);
}

export default App;
