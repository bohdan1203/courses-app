import classes from './Authors.module.css';

import Button from '../../../common/Button/Button';

import { constants } from '../../../../constants';

function Authors(props) {
	const { authorsList, newCourse, setNewCourse } = props;

	function addAuthorToCourse(id) {
		if (!newCourse.authors.includes(id)) {
			setNewCourse((previousNewCourse) => ({
				...previousNewCourse,
				authors: [...previousNewCourse.authors, id],
			}));
		}
	}

	return (
		<div className={classes.authors}>
			<h3>Authors</h3>
			{authorsList
				.filter((author) => !newCourse.authors.includes(author.id))
				.map((author) => (
					<div className={classes.container} key={author.id}>
						<span>{author.name}</span>
						<Button
							textContent={constants.buttonTextContent.addAuthor}
							onClick={() => addAuthorToCourse(author.id)}
						/>
					</div>
				))}
		</div>
	);
}

export default Authors;
