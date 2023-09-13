import characters from './CharacterInfo.js'
import { useState,  useEffect } from 'react';
import miku from './../nakano_miku_render___anime_render_by_niktushi_dcyji16-375w.png';
import removeAccents, { remove } from 'remove-accents';

function GamePage() {

    const [guessCharactersList, setGuessCharactersList] = useState([]);
    var currentCharInd;
    var currentGuess = 0;
    const [userGuess, setUserGuess] = useState("");
    var lowGuess =''
    var correctAnswer =''
    var cleanGuess =''
    const [currentChar, setCurrentChar] = useState("");
    var [playerScore, setPlayerScore] = useState(0);

    useEffect(() => {
        for (let i = 0; i < 10; i++){
            currentCharInd = Math.floor(Math.random() * characters.length);
            guessCharactersList.push(characters[currentCharInd]);
            }
        setCurrentChar(guessCharactersList[0]);
        }, []);

    const handleChange = event => {
        console.log(currentChar);
        setUserGuess(event.target.value);
        lowGuess = event.target.value.toLowerCase();
        cleanGuess = removeAccents(lowGuess);
        correctAnswer = removeAccents(currentChar.name.toLowerCase());
        if (cleanGuess === correctAnswer){
            setUserGuess('')
            updateFields()
        }
        else if(event.target.value === 'Display'){
            console.log(guessCharactersList[currentGuess])
            setUserGuess('')
        }
    };

    const updateFields = event => {
        setGuessCharactersList(guessCharactersList.filter(a => a.name.toLowerCase() !== correctAnswer))
        setCurrentChar(guessCharactersList[1])
        setPlayerScore(playerScore+=1);
        console.log(guessCharactersList);
    }

    const image = (currentChar) ? currentChar.images.jpg.image_url : miku

    return (
        <>
        <div style = {{textAlign: "center"}}>
        <h1> Play! </h1>
        </div>
 
        <img style={{margin: 'auto', display: 'block'}}src = {image} alt ={miku} width={400} length = {400} ></img>
        <br></br>
        <div style = {{textAlign: "center"}}>
        <p >Please enter your guess here: {correctAnswer}</p>
        <input style={{margin: 'auto', display: 'block'}} type="text" onChange={handleChange} value ={userGuess}/>
        <p>Current Score is: {playerScore}</p>
        <p>{cleanGuess}</p>
        </div>
        </>
    );

}
export default GamePage;     

