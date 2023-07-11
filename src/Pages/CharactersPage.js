import { useParams } from 'react-router-dom';
import characters from './CharacterInfo.js';
import NotFoundPage from './NotFoundPage.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterImages from '../Components/CharacterImages.js';

const CharactersPage = () => {
    const [charInfo, SetCharInfo] = useState({ "mal_id": 160603,
    "url": "https://myanimelist.net/character/160603/Miku_Nakano",
    "images": {
        "jpg": {
            "image_url": "https://cdn.myanimelist.net/images/characters/15/507743.jpg"
        },
        "webp": {
            "image_url": "https://cdn.myanimelist.net/images/characters/15/507743.webp",
            "small_image_url": "https://cdn.myanimelist.net/images/characters/15/507743t.webp"
        }
    },
    "name": "Miku Nakano",
    "name_kanji": "中野 三玖",
    "nicknames": [],
    "favorites": 21048,
    "about": "Age: 17-18\nBirthday: May 5\nHeight: 164cm\nWeight: 49 kg\nBlood type: A\n\nMiku Nakano is the third sister of the Nakano Quintuplets. She is a silent and reserved girl. Miku tends to have pessimistic attitude and little confidence regarding herself.\n\n\n(Source: Gotoubun no Hanayome Wiki, Quintuplets website)"})

    // whenever a variable in the array of useEffect changes it will re-update
    const characterId = useParams()

    useEffect(() =>{
        const loadCharInfo = async () => {
        const response = await axios.get(`/api/characters/${Number(characterId.id)}`);
        const newCharInfo = response.data;
        SetCharInfo(newCharInfo);
        }
        loadCharInfo();
    },[]);

    console.log(characterId.id);
    // add functionaly to cycle through the different character images via click
    const clickCharacter = async () => {
        const response = await axios.put(`/api/chracters/${characterId}`)
        //const updateImage = ...
        //SetCharInfo = ...
    }
    return (
        <>
        <figure>
        <img src={charInfo.images.jpg.image_url} width={400} length = {400}></img>
        <figcaption style ={{fontWeight: 600, color: 'black', bold: true, justifyContent: 'bottom'}} >{charInfo.name}</figcaption>
        </figure>
        </>
    );
}

export default CharactersPage;