import classes from './CourseAuthors.module.css';

import { getAuthorsNames } from '../../../../helpers/getAuthorsNames';
import { constants } from '../../../../constants';
import Button from '../../../common/Button/Button';

function CourseAuthors(props) {
	const { authorsList, newCourse, setNewCourse } = props;

	function deleteAuthorFromCourse(id) {
		setNewCourse((previousNewCourse) => ({
			...previousNewCourse,
			authors: [...previousNewCourse.authors].filter((_, i) => i !== id),
		}));
	}

	return (
		<div className={classes['course-authors']}>
			<h3>Course authors</h3>
			{newCourse.authors.length ? (
				getAuthorsNames(newCourse.authors, authorsList).map((author, i) => (
					<div className={classes.container} key={i}>
						<span>{author}</span>
						<Button
							textContent={constants.buttonTextContent.deleteAuthor}
							onClick={() => deleteAuthorFromCourse(i)}
						/>
					</div>
				))
			) : (
				<p>Author list is empty</p>
			)}
		</div>
	);
}

export default CourseAuthors;
