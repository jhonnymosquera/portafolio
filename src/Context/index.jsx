import { Context } from './Context';
import networds from '../data/networds.json';

function ContextProvider({ children }) {
	return <Context.Provider value={{ networds }}>{children}</Context.Provider>;
}

export default ContextProvider;
