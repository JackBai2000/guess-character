import banner from './../mainbanner.png'
import { Container } from '@mui/material';

const HomePage = () => {
    return (
        <>
        <div className='object-fill w-screen h-screen bg-no-repeat bg-cover' style ={{backgroundImage: `url(${banner})`}}>
        <h1 className='text-center font-bold text-3xl font-sans text-green-500'> Welcome to Guess Anime! </h1>
        </div>
        </>
    );
}

export default HomePage;