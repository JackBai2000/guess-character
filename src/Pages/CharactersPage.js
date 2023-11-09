import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CharactersPage = () => {
    const [charInfo, SetCharInfo] = useState({ "mal_id": 160603,
    "url": "",
    "images": {
        "jpg": {
            "image_url": ""
        },
        "webp": {
            "image_url": "",
            "small_image_url": ""
        }
    },
    "name": "",
    "name_kanji": "",
    "nicknames": [],
    "favorites": 21048,
    "about": ""})

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

    // // add functionaly to cycle through the different character images via click
    // const clickCharacter = async () => {
    //     const response = await axios.put(`/api/chracters/${characterId}`)
    //     //const updateImage = ...
    //     //SetCharInfo = ...
    // }
    return (
        <>
        <figure>
        <img src={charInfo.images.jpg.image_url} width={300} length = {300}></img>
        <figcaption style ={{fontWeight: 600, color: 'black', bold: true, justifyContent: 'bottom'}} >{charInfo.name}</figcaption>
        </figure>
        <p class='about'> {charInfo.nicknames} {charInfo.about} {charInfo.url}</p>
        </>
    );
}

export default CharactersPage;