import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ListPage from './Pages/ListPage';
import NotFoundPage from './Pages/NotFoundPage';
import NavBar from './NavBar';
import CharactersPage from './Pages/CharactersPage';
import CharacterContent from './Pages/CharacterContent';
import { useEffect } from 'react';
import { useState } from 'react';
import miku from './nakano_miku_render___anime_render_by_niktushi_dcyji16-375w.png';

function App() {

  const [animeChars, SetAnimeChars] = useState([]);
  const [char, SetAnimeChar] = useState([]);

  const CharacterContent = async () =>{
    const temp = await fetch("https://api.jikan.moe/v4/characters/160603")
       .then(res => res.json());
    
    SetAnimeChar(temp)
 };
 
  useEffect(() => {
    CharacterContent();
  },[])

  console.log(char.data.name);

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to Guess Anime~!</h1>
      <Routes>
      <Route path ="/" element ={<HomePage/>} />
      <Route path = "/about" element = {<AboutPage/>} />
      <Route path = "/list" element = {<ListPage/>} />
      <Route path = "/characters" element = {<CharactersPage/>} />
      <Route path = "/characters/:characterid" element = {<CharacterContent/>} />
      </Routes>
      <img src={char.data.images.jpg.image_url} alt = {miku}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
