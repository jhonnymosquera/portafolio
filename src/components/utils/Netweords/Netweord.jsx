import Picture from '../Picture';
import style from './Netweords.module.css';

function Netweord({ netweord, img }) {
	const { url, icon } = netweord;

	return (
		<div className="netword">
			<a href={url} target="_blank">
				<Picture params={iconBackgroundColor} className={style.netword} />
			</a>
		</div>
	);
}

export default Netweord;
