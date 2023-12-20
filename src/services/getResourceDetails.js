export const getResoruceDetails = (url) => {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('Error de petición');
            }
            return res.json();
        })
        .then(res => {
            return {
                uid: res.result._id,
                ...res.result.properties
            };
        })
        .catch(err => console.log(err));
};