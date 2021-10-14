import React from 'react';

const SearchBox = ({ searchAnimal }) => {
	return (
		<article>
			<form>
				<label for="animal">Animal</label>
				<select id="animal" name="animals" onChange={searchAnimal}>
					<option value="">Please Select An Animal</option>
					<option value="bird">Bird</option>
					<option value="cat">Cat</option>
					<option value="dog">Dog</option>
				</select>
			</form>
		</article>
	);
};

export default SearchBox;
