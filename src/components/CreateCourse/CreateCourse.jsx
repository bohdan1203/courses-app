import { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import AddAuthor from './components/AddAuthor/AddAuthor';
import Authors from './components/Authors/Authors';
import Duration from './components/Duration/Duration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';

import { v4 as uuidv4 } from 'uuid';

import { constants } from '../../constants';

import classes from './CreateCourse.module.css';

const initialCourseState = {
	id: '',
	title: '',
	description: '',
	creationDate: '',
	duration: '',
	authors: [],
};

function CreateCourse(props) {
	const { authorsList, onAddAuthor, onAddCourse, onCreateCourse } = props;

	const [newCourse, setNewCourse] = useState(initialCourseState);

	function changeTitleHandler(event) {
		setNewCourse((previousNewCourse) => ({
			...previousNewCourse,
			title: event.target.value,
		}));
	}

	function changeDescriptionHandler(event) {
		setNewCourse((previousNewCourse) => ({
			...previousNewCourse,
			description: event.target.value,
		}));
	}

	function createNewCourseHandler(event) {
		event.preventDefault();

		if (
			[
				newCourse.title.trim().length >= 2,
				newCourse.description.trim().length >= 2,
				newCourse.duration > 0,
				newCourse.authors.length > 0,
			].every((property) => property)
		) {
			onAddCourse((previousList) => [
				...previousList,
				{
					...newCourse,
					id: uuidv4(),
					creationDate: new Date().toLocaleDateString('en-US'),
				},
			]);
			onCreateCourse(false);
		} else {
			alert('Please enter valid course details');
		}
	}

	return (
		<form className={classes.form} onSubmit={createNewCourseHandler}>
			<header className={classes['form-header']}>
				<Input
					id='title'
					label='Title'
					placeholder='Enter title'
					onChange={changeTitleHandler}
				/>
				<Button
					type='submit'
					textContent={constants.buttonTextContent.createCourse}
				/>
			</header>
			<Input
				tag='textarea'
				id='description'
				label='Description'
				placeholder='Enter description'
				onChange={changeDescriptionHandler}
			/>
			<section className={classes['authors-duration']}>
				<AddAuthor onAddAuthor={onAddAuthor} />
				<Authors
					authorsList={authorsList}
					newCourse={newCourse}
					setNewCourse={setNewCourse}
				/>
				<Duration newCourse={newCourse} setNewCourse={setNewCourse} />
				<CourseAuthors
					authorsList={authorsList}
					newCourse={newCourse}
					setNewCourse={setNewCourse}
				/>
			</section>

			<Button
				textContent={constants.buttonTextContent.cancelCreateCourse}
				onClick={() => onCreateCourse(false)}
			/>
		</form>
	);
}

export default CreateCourse;
