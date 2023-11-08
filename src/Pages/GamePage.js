import characters from './CharacterInfo.js'
import { useState,  useEffect, useRef } from 'react';
import miku from './../nakano_miku_render___anime_render_by_niktushi_dcyji16-375w.png';
import removeAccents from 'remove-accents';
import Timer from './../Components/Timer.js'


function GamePage() {

    const [guessCharactersList, setGuessCharactersList] = useState([]);
    var currentCharInd;
    const [userGuess, setUserGuess] = useState("");
    var lowGuess =''
    var correctAnswer =''
    var cleanGuess =''
    var tempChar = ''
    var uniqueCharactersList = []
    const [currentChar, setCurrentChar] = useState("");
    var [playerScore, setPlayerScore] = useState(0);
    var [currentCharNames, setCurrentCharNames] = useState([]);
    var [isPlaying, setIsPlaying] = useState(true);
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    useEffect(() => {
        for (let i = 0; i < 100; i++){
            currentCharInd = Math.floor(Math.random() * characters.length);
            tempChar = characters[currentCharInd]
            guessCharactersList.push(characters[currentCharInd]);
            // try to figure out why set state is not updating the array
            // setGuessCharactersList(...guessCharactersList, tempChar)
            }
        uniqueCharactersList = Array.from(new Set(guessCharactersList))
        setGuessCharactersList(uniqueCharactersList);
        setCurrentChar(guessCharactersList[0]);
        console.log(guessCharactersList.length,uniqueCharactersList.length);
        }, [isPlaying]);

    function generateCharacters(){
        setGuessCharactersList([]);
        for (let i = 0; i < 100; i++){
            currentCharInd = Math.floor(Math.random() * characters.length);
            tempChar = characters[currentCharInd]
            guessCharactersList.push(characters[currentCharInd]);
            }
        uniqueCharactersList = Array.from(new Set(guessCharactersList))
        setGuessCharactersList(uniqueCharactersList);
        setCurrentChar(guessCharactersList[0]);
    }

    function correctAnswers(charNicknames, name) {
        var correctNicknames = [];
        var numberNicknames = charNicknames.length;
        for (let i = 0; i < numberNicknames; i++){
            correctNicknames.push(removeAccents(charNicknames[i].split(", ")[0]).toLowerCase())
        }
        var originalName = name.split(" ");
        for (let i = 0; i< originalName.length; i++){
            correctNicknames.push(removeAccents(originalName[i].split(", ")[0]).toLowerCase())
        }
        correctNicknames.push(name);
        return correctNicknames
    }

    const handleChange = event => {
        //console.log(currentChar);
        setUserGuess(event.target.value);
        lowGuess = event.target.value.toLowerCase();
        cleanGuess = removeAccents(lowGuess);
        correctAnswer = removeAccents(currentChar.name.toLowerCase());
        setCurrentCharNames(correctAnswers(currentChar.nicknames,correctAnswer));
        if (currentCharNames.includes(cleanGuess)){
            setUserGuess('')
            updateFields()
        }
        else if (cleanGuess === "s"){
            setUserGuess('')
            updateFields()
            setPlayerScore(playerScore -=1);
        }
    };

    const updateFields = event => {
        // create a case to handle when the guesscharacterslist is fully empty
        if (guessCharactersList.length === 1 || parseInt(timer.slice(-2)) <= 0){
            setIsPlaying(false);
        }
        setCurrentChar(guessCharactersList[1]);
        setGuessCharactersList(guessCharactersList.slice(1));
        setPlayerScore(playerScore+=1);
        correctAnswer = removeAccents(currentChar.name.toLowerCase());
        setCurrentCharNames(correctAnswers(currentChar.nicknames,correctAnswer));
    }

    const image = (currentChar) ? currentChar.images.jpg.image_url : miku

    function playAgain(){
        setPlayerScore(0);
        generateCharacters();
        setIsPlaying(true);
        clearTimer(getDeadTime());
    }

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60 ) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let {total, hours, minutes, seconds}
            = getTimeRemaining(e);
        if (total >= 0){
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        setTimer('00:01:00')

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        },1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    if (isPlaying){
    return (
        <>
        <h1 className='font-bold text-center text-xl text-green-300'>Play!</h1>
        <img className = 'm-auto ' src = {image} alt ={miku} width={400} length = {400} ></img>
        <br></br>
        <div style = {{textAlign: "center"}}>
        <p>Please enter your guess here: {correctAnswer}</p>
        <input style={{margin: 'auto', display: 'block'}} type="text" onChange={handleChange} value ={userGuess}/>
        <h1>Current Score is: {playerScore}</h1>
        <h1>{cleanGuess}</h1>
        <h1>Time Remaining:</h1>
        <h1>{timer}</h1>
        <button onClick={onClickReset}>Reset</button>
        </div>
        </>
    );

    }
    return (
    <>
    <div style = {{textAlign: "center"}}>
    <h1>Thanks for playing!</h1>
    <h1>Your final score is {playerScore}!</h1>
    <button onClick={playAgain}>Play Again!</button>
    </div>
    </>
    )
}
export default GamePage;     
