import { useState, useEffect } from "react";

import {getAllDetails} from "../services/getAllDetails"

const useResorces = (targetResource) => {
    const [resources, setResources] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { 
        getAllDetails(targetResource)
        .then((res) => {
            setResources(res);
            setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);

    return{
        resources,
        isLoading,
    };
};

export default useResorces;

