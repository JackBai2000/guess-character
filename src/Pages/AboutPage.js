import bocchi from '../bocchi.jpg'
const AboutPage = () => {
    return (
        <>
        <h1 style={{textAlign: 'center', fontSize: '50px'}}> About Page </h1>
        <p style={{fontSize: '25px'}}>The rules of the game are simple, you will be given a randomly selected popular anime character from
            the characters section and you will have to name them! Have fun with this and do your best!
        </p>
        <div style ={{height: '100vh', backgroundImage: `url(${bocchi})`}}>
        </div>
        </>
    );
}

export default AboutPage;