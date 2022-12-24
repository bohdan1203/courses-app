import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import { constants } from '../../constants';
import classes from './Header.module.css';

function Header(props) {
	return (
		<header className={classes.header}>
			<Logo />
			<div className={classes.user}>
				<span>Theodore</span>
				<Button
					textContent={constants.buttonTextContent.logout}
					onClick={() => console.log('Logging out...')}
				/>
			</div>
		</header>
	);
}

export default Header;
