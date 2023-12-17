import { createContext, useContext } from 'react';

const AppContext = createContext();

export const AppContextProvider = ( { children }) => {
    return <AppContext.Provider value={null}>{ children }</AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;