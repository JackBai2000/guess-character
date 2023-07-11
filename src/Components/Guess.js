import { useState } from "react";
import axios from 'axios';


const Guess = () => {
    const [userGuess, setUserGuess] = useState();
    // const submitGuess = async () => {
    //     const response = axios.post(`/api/characters/${}/userguesses`)
    //     on....
    //     setUserGuess('');
    // }

    return(
        <>
        <label>Guess: 
        <textarea>
        value = {userGuess}
        onChange = {e => setUserGuess(e.target.value)}
        </textarea>
        </label>
        <button>Submit Guess</button>
        </>
    )
}

export default Guess;