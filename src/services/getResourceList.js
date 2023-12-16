export const getResoruceList = (resource) => {
    return fetch(`https://swapi.tech/api/${resource}`)
        .then(res => {
            if (!res.ok) {
                throw Error('Error de petición');
            }
            return res.json();
        })
        .then(res => res.results);
};