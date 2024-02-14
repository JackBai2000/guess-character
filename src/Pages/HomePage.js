import banner from './../mainbanner.png'
import { Container } from '@mui/material';

const HomePage = () => {
    return (
        <>
        <div className='object-fill w-screen h-screen bg-no-repeat bg-cover' style ={{backgroundImage: `url(${banner})`}}>
        <h1 className='text-center font-bold text-4xl font-sans text-black-500 backdrop-blur-md'> Welcome to Guess Anime! </h1>
        </div>
        </>
    );
}

export default HomePage;