import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';

import { Header } from "./components/";
import { Home, Cart } from "./pages/";
import { setPizzas } from './redux/actions/pizzas'

class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/db.json').then(({data}) => {
			window.store.dispatch(
				setPizzas(data.pizzas)
			)
		})
	}
    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route exact path="/" render={() => <Home items={this.props.items} />} />
                    <Route exact path="/cart" component={Cart} />
                </div>
            </div>
        );
    }
}

// function App() {
// 	const [items, setItems] = useState([]);

// 	useEffect(() => {
// 		axios.get('http://localhost:3000/db.json').then(({data}) => {
// 			setItems(data.pizzas)
// 		})
// 	}, []);

// 	return (
// 		<div className='wrapper'>
// 			<Header />
// 			<div className='content'>
// 				<Route exact path='/' render={() => <Home items={items} />} />
// 				<Route exact path='/cart' component={Cart} />
// 			</div>
// 		</div>
// 	);
// }

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items
    }
}

export default connect(mapStateToProps)(App);
