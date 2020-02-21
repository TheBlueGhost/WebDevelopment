import React from 'react';
function Rank({name, entries}){
	return(
		<div>
	    	<div className='white f2 '>
	    	{name + ', your current entry count is...'}
	    	</div>
	    	<div className='navy f2 '>
	        	{'#' + entries}
	    	</div>
		</div>
		);
}
export default Rank;