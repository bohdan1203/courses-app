import Button from '../../../common/Button/Button';
import { constants } from '../../../../constants';
import classes from './CourseCard.module.css';

function CourseCard(props) {
	const { title, description, authors, duration, creationDate } = props;

	return (
		<div className={classes['course-card']}>
			<div className={classes['course-card__left']}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className={classes['course-card__right']}>
				<div className={classes['course-card__authors']}>
					<b>Authors:</b> {authors}
				</div>
				<div>
					<b>Duration: </b>
					{duration} hours
				</div>
				<div>
					<b>Created: </b>
					{creationDate}
				</div>
				<Button
					textContent={constants.buttonTextContent.showCourse}
					onClick={() => {}}
				/>
			</div>
		</div>
	);
}

export default CourseCard;
