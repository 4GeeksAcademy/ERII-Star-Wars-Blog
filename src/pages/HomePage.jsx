import Section from '../components/Section';

const HomePage = () => {
    return (
        <main className='container'>
            <Section target='people' title='Characters' />
            <Section target='planets' title='Planets' />
            <Section target='vehicles' title='Vehicles' />
            <Section target='starships' title='Starships' />
        </main>
    )
}

export default HomePage;