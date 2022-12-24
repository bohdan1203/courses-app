import logoImg from '../../../../assets/logo.png';
import classes from './Logo.module.css';

function Logo() {
	return <img className={classes.logo} src={logoImg} alt='logo' />;
}

export default Logo;
