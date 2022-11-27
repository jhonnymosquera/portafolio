import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage';
import HomePage from '../../pages/HomePage';
import NotFundPage from '../../pages/NotFundPage';
import PortafolioPage from '../../pages/PortafolioPage';

function Routers() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/portafolio" element={<PortafolioPage />} />
			<Route path="/sobre_mi" element={<AboutPage />} />

			<Route path="*" element={<NotFundPage />} />
		</Routes>
	);
}

export default Routers;
