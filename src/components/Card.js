import React from 'react';

const Card = ({ id, name, description, age }) => {
	return (
		<article>
			<img src={`https://robohash.org/${id}?200x200`} alt={`${name}`} />
			<div>
				<h2>{name}</h2>
				<h4>{age}</h4>
				<p>{description}</p>
			</div>
		</article>
	);
};

export default Card;
