import { createContext, useContext, useMemo } from 'react';

import useResorces from '../hooks/useResources';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [people, peopleAreLoading] = useResorces('people');
    const [vehicles, vehiclesAreLoading] = useResorces('vehicles');
    const [planets, planetsAreLoading] = useResorces('planets');

    const isLoading = useMemo(() => {
        return peopleAreLoading || vehiclesAreLoading || planetsAreLoading
    }, [peopleAreLoading, vehiclesAreLoading, planetsAreLoading]);

    const store = {
        people,
        vehicles,
        planets,
        isLoading,
    };

    const actions = {};


    return <AppContext.Provider value={{store, actions}}>{children}</AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;