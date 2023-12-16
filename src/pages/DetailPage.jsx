import { useParams } from "react-router-dom";

const DetailPage = () => {
    const params = useParams();

    return <h1>Detail Page of {params.resource}</h1>
}

export default DetailPage;