import { useEffect, useState } from 'react';
import Bars from './Bars';
import NavBarLi from './NavBarLi';
import routes from './routes.json';
import styles from './styles.module.css';

export default function NavBarApp() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const handleWindowWidth = () => setWindowWidth(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', handleWindowWidth);
	}, []);

	const bars = windowWidth < 790;
	const [barsActive, setBarsActive] = useState(false);

	function handleBars() {
		setBarsActive(!barsActive);
	}

	return (
		<>
			<nav className={styles.nav}>
				<ul className={`${styles.ul} ${barsActive ? styles.ulActive : ''}`}>
					{routes.map((rute, index) => {
						return <NavBarLi key={index} rute={rute} handleBars={handleBars} />;
					})}
				</ul>
			</nav>

			{bars && <Bars barsActive={barsActive} handleBars={handleBars} />}
		</>
	);
}
