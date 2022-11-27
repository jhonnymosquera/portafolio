import { Context } from './Context';
import networds from '../data/networds.json';
import perfil from '../data/perfil.json';
import portafolio from '../data/portafolio.json';

function ContextProvider({ children }) {
	return <Context.Provider value={{ networds, perfil, portafolio }}>{children}</Context.Provider>;
}

export default ContextProvider;
