import classes from './Button.module.css';

function Button(props) {
	const { type = 'button', textContent, onClick } = props;

	return (
		<button className={classes.button} type={type} onClick={onClick}>
			{textContent}
		</button>
	);
}

export default Button;
