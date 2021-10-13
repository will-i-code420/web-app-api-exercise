import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Client } from '@petfinder/petfinder-js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			pets: []
		};
	}
	async componentDidMount() {
		const client = new Client({ apiKey: process.env.REACT_APP_PF_KEY, secret: process.env.REACT_APP_PF_SECRET });
		try {
			const res = await client.animal.search();
			console.log(res);
			this.setState({ pets: res.data.animals });
		} catch (e) {
			console.log(e);
		}
	}
	render() {
		const { pets } = this.state;
		if (!pets.length) {
			return <h1>Loading Pets....</h1>;
		} else {
			return (
				<section className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<div>
							<h1>Pets</h1>
							<p>Let us help you find your new best friend</p>
							<a href="#about">About Us</a>
						</div>
					</header>
				</section>
			);
		}
	}
}

export default App;
