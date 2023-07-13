import banner from './../mainbanner.jpg'
import { Container } from '@mui/material';

const HomePage = () => {
    return (
        <>
        <h1 style={{textAlign: 'center'}}> Welcome to Guess Anime! </h1>
        <div  className='main-content' style ={{backgroundImage: `url(${banner})`}}>
        <Container style={{height: '100vh'}}>
        <p></p>
        </Container>
        </div>
        </>
    );
}

export default HomePage;