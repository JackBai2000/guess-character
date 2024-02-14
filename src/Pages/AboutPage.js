import bg from '../aboutpage.jpg'
const AboutPage = () => {
    return (
        <>
        <div className='object-fill w-screen h-screen bg-no-repeat bg-cover' style ={{backgroundImage: `url(${bg})`}}>
        <h1 className='font-bold text-center  text-black-500 text-4xl backdrop-blur-sm'> About Page </h1>
        <br></br>
        <h1 className='font-bold text-center  text-black-500 text-3xl backdrop-blur-sm'>The rules of the game are simple!<br></br>
         You will be given a minute to name as many popular anime characters as you can and your high score will be recorded. <br></br>
         You can also type "skip" to skip the character you are currently naming!

        </h1>
        </div>
        </>
    );
}

export default AboutPage;