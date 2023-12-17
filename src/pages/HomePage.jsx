import Section from '../components/Section';

const HomePage = () => {
    return (
        <main className='container'>
            <Section resourceType='people' title='Characters' />
            <Section resourceType='planets' title='Planets' />
            <Section resourceType='vehicles' title='Vehicles' />
        </main>
    )
}

export default HomePage;