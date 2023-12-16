import { getResoruceList } from "./getResourceList";
import { getResoruceDetails } from "./getResourceDetails";

export const getAllDetails = (resource) => {
    return getResoruceList(resource)
        .then(resourceList => {
            return Promise.all(resourceList.map((resource) => {
                return getResoruceDetails(resource.url);
            }));
        })
        .catch(err => console.log(err));
};