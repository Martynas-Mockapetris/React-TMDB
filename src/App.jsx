import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MovieSearch from './pages/MovieSearchPage';
import Favorites from './pages/FavsPage';

const API_KEY = '53c258bb52d305146e19a71e58aa2cc5';
const BASE_URL = 'https://api.themoviedb.org/3';

function App() {
  // Kintamieji saugot filmus, zanrus, paieskos rakta, option verte, megstamiausius
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favoriteMovies')) || []);

  // Traukiu duomenis is API
  useEffect(() => {

    // Gauti norima kieki filmu
    const fetchMovies = async () => {
      // Nusistatau kiek puslapiu noriu
      const pageNum = 5;
      // Kur desiu laikinai gautus duomenis
      let allPageData = [];

      // Ciklas issitraukt kiekvieno puslapio duomenis
      for (let i = 1; i <= pageNum; i++) {
        // Gaunu duomenis is puslapio viena po kito 
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${i}`);
        // Konvertuoju i json objekta
        const data = await response.json();
        // Kiekvieno puslapio duoemnis pridedu i masyva
        allPageData = [...allPageData, ...data.results];
      }

      // duodu visus duomenis i musu kintamaji ir apsikarpau duomenu kieki del grazesnio rodymo kaitaliojant puslapio ploti [90 optimaliausiai uzpildo visu plociu ekranus apart kai buna 4 eileje]
      setMovies(allPageData.slice(0, 90));
    };
    // Prasitestuoju ar gaunu filmus
    // console.log('Filmai', movies);

    // Pasileidziu filmo gavimo funkcija
    fetchMovies();

    // // Gauti pupuleriausius filmus pirmo psl
    // fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`)
    //   // Konvertuojam i json objekta
    //   .then((res) => res.json())
    //   // Pasiimam pirmus 10 su slice ir paduodam i movies kintamaji
    //   .then((data) => {
    //     // Prasitestuoju
    //     // console.log('Filmai:', data.results);
    //     setMovies(data.results.slice(0, 12));
    //   });

    // Gauti visu filmu tipus
    fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      // Konvertuojam i json objekta
      .then((res) => res.json())
      // Pasiimam visus tipus ir paduodam i genres kintamaji
      .then((data) => {
        // Prasitestuoju
        // console.log('Zanrai:', data.genres);
        setGenres(data.genres);
      });
  }, []);

  // Tikrinam ar yra pakitimu megstamiausiuose filmuose
  useEffect(() => {
    // Saugom filmus i local storage su JSON stringify string formatu nes array nepriima
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
    // Prasitestuoju
    // console.log('Favs', favorites);
  }, [favorites]);

  // Funkcija kuri tikrina paieskos ivesti ir daro paieska
  const handleSearch = (e) => {
    // pasiimu paieskos teksta
    const value = e.target.value;
    // issaugom paieskos reiksme del props ir paduodam kitiems komponentams
    setSearchTerm(value);

    // Tikrinu ar ivesta pakankamai simboliu
    if (value.length >= 2) {
      // Jeigu true tikrinu duombaze su musu verte
      fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`)
        // Konvertuoju rezultatus i json objekta
        .then((res) => res.json())
        // Isiimu visus filmus ir paduodu i movies kintamaji
        .then((data) => setMovies(data.results));
    }
  };

  // Funkcija kuri tikrina pasirinkta filmu tipa ir daro paieska
  const handleGenreSelect = (genreId) => {
    // issaugom pasirinkta tipa del props ir paduodam kitiems komponentams
    setSelectedGenre(genreId);
    // Traukiu duomenis su pasirinktu tipu paduodamas tipo ID
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`)
      // Konvertuoju rezultatus i json objekta
      .then((res) => res.json())
      // Paduodu duomenis i movies kintamaji
      .then((data) => setMovies(data.results));
  };

  // Funkcija kuri tikrina ar filmas megstamiausiuose filmuose ir atima/prideda
  const toggleFavorite = (movie) => {
    // Tikrinu ar filmas yra megstamiausiuose filmuose
    if (favorites.find((fav) => fav.id === movie.id)) {
      // Jeigu yra tai istrinu is megstamiausiu filmu
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      // Jeigu ne tai pridedu prie megstamiausiu filmu
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        {/* Del lengvesnio stilizavimo susidedu nav i container */}
        <div className="nav-container">
          {/* Susidedu visus puslapius i nav */}
          <nav>
            {/* Router elementu susikuriu nuorodas i puslapius [konvertuojasi i a linkus] */}
            <Link to="/" className="nav-link">
              filmų paieška
            </Link>
            <Link to="/favorites" className="nav-link">
              mėgstamiausi
            </Link>
          </nav>
        </div>

        <Routes>
          {/* Route lokacijos kur generuojam puslapio turinius pasiduodu reikiamus props kiekvienam puslaiui */}
          <Route
            path="/"
            element={<MovieSearch movies={movies} favorites={favorites} selectedGenre={selectedGenre} toggleFavorite={toggleFavorite} searchTerm={searchTerm} handleSearch={handleSearch} genres={genres} handleGenreSelect={handleGenreSelect} />}
          />
          <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
