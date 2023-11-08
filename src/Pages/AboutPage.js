import bg from '../aboutpage.jpg'
const AboutPage = () => {
    return (
        <>
        <div className='object-fill w-screen h-screen bg-no-repeat bg-cover' style ={{backgroundImage: `url(${bg})`}}>
        <h1 className='text-center font-500 text-orange-500 text-3xl'> About Page </h1>
        <h1 className='text-center font-500 text-orange-400 text-2xl'>The rules of the game are simple, you will be given a minute to name as many popular anime characters as you can, good luck!
        </h1>
        </div>
        </>
    );
}

export default AboutPage;