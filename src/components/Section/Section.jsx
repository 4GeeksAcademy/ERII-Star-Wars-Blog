import Card from "../Card";

import classes from './Section.module.css'

const Section = () => {
    return (
        <section>
            <h2>Characters</h2>
            <div className={classes.carousel}>
                {Array.from({ length: 10 }).map((_, index) => <Card key={index} />)}
            </div>
        </section>
    );
 }

export default Section;