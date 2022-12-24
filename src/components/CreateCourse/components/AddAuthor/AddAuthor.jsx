import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';
import classes from './AddAuthor.module.css';

import { constants } from '../../../../constants';

function AddAuthor(props) {
	const [enteredAuthorName, setEnteredAuthorName] = useState('');

	function newAuthorNameHandler(event) {
		setEnteredAuthorName(event.target.value);
	}

	function createNewAuthorHandler() {
		if (enteredAuthorName.trim()) {
			props.onAddAuthor((previousAuthorsList) => [
				...previousAuthorsList,
				{ id: uuidv4(), name: enteredAuthorName.trim() },
			]);
			setEnteredAuthorName('');
		}
	}

	return (
		<div className={classes['add-author']}>
			<h3>Add author</h3>
			<Input
				id='add-author'
				label='Author name'
				placeholder='Enter author name'
				value={enteredAuthorName}
				onChange={newAuthorNameHandler}
			/>
			<Button
				textContent={constants.buttonTextContent.createAuthor}
				onClick={createNewAuthorHandler}
			/>
		</div>
	);
}

export default AddAuthor;
