import { useEffect } from "react";


const CharacterContent = async () =>{
   const temp = await fetch("https://api.jikan.moe/v4/characters/{160603}")
      .then(res => res.json());
   
   console.log(temp.name);
};

export default CharacterContent;