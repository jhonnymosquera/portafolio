import React from 'react';
import useContexApp from '../../Context/useContextApp';
import Picture from '../utils/Picture';
import Technologies from './Technologies';

export default function Header() {
	const { perfil } = useContexApp();

	const { name, title, technologies, photo } = perfil;

	return (
		<header className="header">
			<div className="foto">
				<Picture img={photo} />
			</div>

			<div className="description">
				<div className="info">
					<h1>{name}</h1>
					<h2>{title}</h2>
				</div>

				<div className="text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto asperiores
						repellat debitis nihil eum distinctio vel doloribus! Error ullam explicabo itaque quae
						minus voluptatum esse quod, laboriosam similique fugit!
					</p>
				</div>

				<div className="technologies">
					{technologies.map((tec, i) => {
						return <Technologies key={i} tec={tec} />;
					})}
				</div>
			</div>
		</header>
	);
}
