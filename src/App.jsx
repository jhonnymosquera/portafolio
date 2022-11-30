import './App.css';
import Header from './components/header/Header';
import Routers from './components/routes';

function App() {
	return (
		<div className="App container">
			<Header />
			<Routers />
		</div>
	);
}

export default App;
