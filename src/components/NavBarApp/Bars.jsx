import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Bars({ handleBars, barsActive }) {
	return (
		<div
			className={`${styles.bars} ${barsActive ? styles.barsActive : ''}`}
			onClick={() => handleBars()}
		>
			<div className={`${styles.bar} ${styles.b1}`}></div>
			<div className={`${styles.bar} ${styles.b2}`}></div>
			<div className={`${styles.bar} ${styles.b3}`}></div>
		</div>
	);
}
