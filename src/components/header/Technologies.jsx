export default function Technologies({ tec }) {
	const { name, icon, alt } = tec;

	return (
		<div className="tec">
			<img src={icon} alt={alt} />
			<p>{name}</p>
		</div>
	);
}
