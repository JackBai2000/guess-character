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
import CharactersListPage from './Pages/CharactersListPage';

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

  console.log(char);

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <Routes>
      <Route path ="/" element ={<HomePage/>} />
      <Route path = "/about" element = {<AboutPage/>} />
      <Route path = "/characters" element = {<CharactersListPage/>} />
      <Route path = "/characters/:id" element = {<CharactersPage/>} />
      <Route path ="*" element = {<NotFoundPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

// const response = await axios.get('http://localhost:8000/api/..../....')
// const data = response.data; 
// 