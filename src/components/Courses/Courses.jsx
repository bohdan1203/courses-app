import { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';
import { constants } from '../../constants';
import { getAuthorsNames } from '../../helpers/getAuthorsNames';
import { formatDate } from '../../helpers/formatDate';
import { formatDuration } from '../../helpers/formatDuration';
import classes from './Courses.module.css';

function Courses(props) {
	const { coursesList, authorsList } = props;

	const [searchRequest, setSearchRequest] = useState('');

	const coursesListContent = coursesList
		.filter((course) => {
			if (searchRequest !== '') {
				return (
					course.title.toLowerCase().includes(searchRequest) ||
					course.id.toLowerCase().includes(searchRequest)
				);
			} else {
				return course;
			}
		})
		.map((course) => (
			<CourseCard
				key={course.id}
				title={course.title}
				description={course.description}
				creationDate={formatDate(course.creationDate)}
				duration={formatDuration(course.duration)}
				authors={getAuthorsNames(course.authors, authorsList).join(', ')}
			/>
		));

	return (
		<section className={classes.courses}>
			<header className={classes['courses-header']}>
				<SearchBar coursesList={coursesList} onSearch={setSearchRequest} />
				<Button
					textContent={constants.buttonTextContent.addNewCourse}
					onClick={() => props.onCreateCourse(true)}
				/>
			</header>
			{coursesListContent}
		</section>
	);
}

export default Courses;
