import React, { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components//CreateCourse/CreateCourse';

import { mockedCoursesList, mockedAuthorsList } from './constants';

import './App.css';
import { useEffect } from 'react';

function App() {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [isCreateCourse, setIsCreateCourse] = useState(false);

	useEffect(
		() => console.log(coursesList, authorsList),
		[coursesList, authorsList]
	);

	return (
		<React.Fragment>
			<Header />
			{isCreateCourse ? (
				<CreateCourse
					onCreateCourse={setIsCreateCourse}
					onAddCourse={setCoursesList}
					onAddAuthor={setAuthorsList}
					authorsList={authorsList}
				/>
			) : (
				<Courses
					onCreateCourse={setIsCreateCourse}
					coursesList={coursesList}
					authorsList={authorsList}
				/>
			)}
		</React.Fragment>
	);
}

export default App;
