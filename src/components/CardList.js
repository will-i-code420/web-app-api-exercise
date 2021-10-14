import React from 'react';
import Card from './Card';

const CardList = ({ pets }) => {
	return (
		<section>
			{pets.map((pet, i) => {
				return (
					<Card key={i} id={pet[i].id} name={pet[i].name} description={pet[i].description} age={pet[i].age} />
				);
			})}
		</section>
	);
};

export default CardList;
