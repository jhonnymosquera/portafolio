import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export default function NavBarLi({ rute, handleBars }) {
	return (
		<li className={styles.li}>
			<NavLink to={rute.path} onClick={() => handleBars()}>
				{rute.name}
			</NavLink>
		</li>
	);
}
