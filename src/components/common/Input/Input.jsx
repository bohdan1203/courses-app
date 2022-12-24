import classes from './Input.module.css';

function Input(props) {
	const {
		tag = 'input',
		type = 'text',
		label,
		id,
		value,
		placeholder,
		onChange,
	} = props;

	return (
		<div>
			{label && (
				<label className={classes.label} htmlFor={id}>
					{label}
				</label>
			)}
			{tag === 'input' && (
				<input
					className={classes.input}
					type={type}
					id={id}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			)}
			{tag === 'textarea' && (
				<textarea
					className={classes.textarea}
					id={id}
					placeholder={placeholder}
					onChange={onChange}
				></textarea>
			)}
		</div>
	);
}

export default Input;
