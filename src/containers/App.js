import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Client } from '@petfinder/petfinder-js';
import Search from '../components/Search';

class App extends Component {
	constructor() {
		super();
		this.state = {
			pets: [],
			animalSearch: ''
		};
	}
	async componentDidMount() {
		const client = new Client({ apiKey: process.env.REACT_APP_PF_KEY, secret: process.env.REACT_APP_PF_SECRET });
		try {
			const res = await client.animal.search();
			if (!res.data) {
				throw Error('Something went wrong');
			}
			this.setState({ pets: res.data.animals });
		} catch (e) {
			console.log(e);
		}
	}
	onAnimalInput = (e) => {
		this.setState({ animalSearch: e.target.value });
	};
	render() {
		const { pets } = this.state;
		if (!pets.length) {
			return <h1 className="container mx-auto px-4 text-xl font-black">Loading Pets....</h1>;
		} else {
			return (
				<section className="App container mx-auto px-4">
					<header className="App-header flex justify-around">
						<img src={logo} className="App-logo" alt="logo" />
						<div>
							<h1 className="text-xl font-black">Pets</h1>
							<p>Let us help you find your new best friend</p>
							<a href="#about">About Us</a>
						</div>
					</header>
					<Search searchAnimal={this.onAnimalInput} />
				</section>
			);
		}
	}
}

export default App;
