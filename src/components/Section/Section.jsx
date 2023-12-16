import Card from "../Card";

import classes from './Section.module.css'

const Section = ({ title }) => {
    return (
        <section className="my-5">
            <h2 className="mb-2">{title}</h2>
            <div className={classes.carousel}>
                {Array.from({ length: 10 }).map((_, index) => <Card key={index} />)}
            </div>
        </section>
    );
 }

export default Section;