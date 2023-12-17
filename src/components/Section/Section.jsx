import Card from "../Card";
import useResorces from "../../hooks/useResources";

import classes from './Section.module.css'

const Section = ({ title, resourceType }) => {
    const { resources, isLoading } = useResorces(resourceType);

    if (isLoading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }


    return (
        <section className="my-5">
            <h2 className="mb-2">{title}</h2>
            <div className={classes.carousel}>
                {resources.map((item, index) => (
                <Card key={index} resourceType={resourceType} {...item}/>
                ))}
            </div>
        </section>
    );
}

export default Section;