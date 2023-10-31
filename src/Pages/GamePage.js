import characters from './CharacterInfo.js'
import { useState,  useEffect } from 'react';
import miku from './../nakano_miku_render___anime_render_by_niktushi_dcyji16-375w.png';
import removeAccents from 'remove-accents';

function GamePage() {

    const [guessCharactersList, setGuessCharactersList] = useState([]);
    var currentCharInd;
    const [userGuess, setUserGuess] = useState("");
    var lowGuess =''
    var correctAnswer =''
    var cleanGuess =''
    var tempChar = ''
    const [currentChar, setCurrentChar] = useState("");
    var [playerScore, setPlayerScore] = useState(0);
    var [currentCharNames, setCurrentCharNames] = useState([]);
    var [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        for (let i = 0; i < 10; i++){
            currentCharInd = Math.floor(Math.random() * characters.length);
            tempChar = characters[currentCharInd]
            while (guessCharactersList.includes(tempChar)){
                currentCharInd = Math.floor(Math.random() * characters.length);
                tempChar = characters[currentCharInd]
            }
            guessCharactersList.push(characters[currentCharInd]);
            }
        setCurrentChar(guessCharactersList[0]);
        }, []);

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
        console.log(currentChar);
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
        if (guessCharactersList.length === 1){
            console.log("Win")
            setIsPlaying(false);
        }
        setGuessCharactersList(guessCharactersList.slice(1))
        setCurrentChar(guessCharactersList[1])
        setPlayerScore(playerScore+=1);
        correctAnswer = removeAccents(currentChar.name.toLowerCase());
        setCurrentCharNames(correctAnswers(currentChar.nicknames,correctAnswer));
        console.log(guessCharactersList.length);
    }

    const image = (currentChar) ? currentChar.images.jpg.image_url : miku

    return (
        <>
        <div style = {{textAlign: "center"}}>
        <h1 className = 'text-green-500 dark:shadow-lg mx-2 dark:text-primary'> Play! </h1>
        </div>
 
        <img style={{margin: 'auto', display: 'block'}}src = {image} alt ={miku} width={400} length = {400} ></img>
        <br></br>
        <div style = {{textAlign: "center"}}>
        <p>Please enter your guess here: {correctAnswer}</p>
        <input style={{margin: 'auto', display: 'block'}} type="text" onChange={handleChange} value ={userGuess}/>
        <p>Current Score is: {playerScore}</p>
        <p>{cleanGuess}</p>
        </div>
        </>
    );

}
export default GamePage;     

