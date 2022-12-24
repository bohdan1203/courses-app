import { useState } from 'react';
import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';
import { constants } from '../../../../constants';
import classes from './SearchBar.module.css';

function SearchBar(props) {
	const [searchRequest, setSearchRequest] = useState('');

	function searchRequestHandler(event) {
		setSearchRequest(event.target.value);

		if (event.target.value === '') {
			props.onSearch('');
		}
	}

	return (
		<div className={classes['search-bar']}>
			<Input placeholder='Enter course name' onChange={searchRequestHandler} />
			<Button
				textContent={constants.buttonTextContent.search}
				onClick={() => props.onSearch(searchRequest.toLowerCase())}
			/>
		</div>
	);
}

export default SearchBar;
