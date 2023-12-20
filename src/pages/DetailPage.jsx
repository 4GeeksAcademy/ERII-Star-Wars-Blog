import { useParams } from "react-router-dom";
import useAppContext from "../contexts/appContext";

const DetailPage = () => {
    const params = useParams();
    const { store } = useAppContext();
    const { people, planets, vehicles } = store;
    const allResources = [...people, ...planets, ...vehicles];
    const targetResource = allResources.find(item => items.uid == params.uid)

    console.log(store)

    return <h1>{targetResource.name}</h1>
}

export default DetailPage;