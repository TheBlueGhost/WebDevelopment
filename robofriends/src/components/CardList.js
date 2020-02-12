import React, { Fragment } from 'react';
import Card from './Card';
function CardList({ robots }) {
	const cardsArray = robots.map((user, i) => {
		return (
			<Card 
				key={ robots[i].id } 
				id={ robots[i].id } 
				name={ robots[i].name } 
				email={ robots[i].email }
			/>
		);
	})
	return(
		<Fragment>
			{ cardsArray }
		</Fragment>
	);
}
export default CardList;