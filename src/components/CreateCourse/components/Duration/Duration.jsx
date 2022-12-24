import classes from './Duration.module.css';
import Input from '../../../common/Input/Input';

import { formatDuration } from '../../../../helpers/formatDuration';

function Duration(props) {
	const { newCourse, setNewCourse } = props;

	function changeDurationHandler(event) {
		if (event.target.value < 0 || event.target.value === '') {
			setNewCourse((previousNewCourse) => ({
				...previousNewCourse,
				duration: '',
			}));
		} else {
			setNewCourse((previousNewCourse) => ({
				...previousNewCourse,
				duration: +event.target.value,
			}));
		}
	}

	return (
		<div className={classes.duration}>
			<h3>Duration</h3>
			<Input
				type='number'
				id='duration'
				label='Duration'
				placeholder='Enter duration in minutes'
				value={newCourse.duration}
				onChange={changeDurationHandler}
			/>
			<div className={classes['formatted-duration']}>
				Duration: <b>{formatDuration(newCourse.duration)}</b> hours
			</div>
		</div>
	);
}

export default Duration;
