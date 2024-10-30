import Search from '../components/Search';
import Movies from '../components/Movies';

// Pasiimu visus props
function MovieSearch({ movies, favorites, toggleFavorite, searchTerm, handleSearch, genres, handleGenreSelect, selectedGenre }) {
  // Tikrinu ar gaunu zanru ID
  // console.log('id:', selectedGenre);
  // Tikrinu ar gaunu zanru info
  // console.log('zanrai:', genres);

  // Rodau pasirinkta zanro pavadinima
  let selectedGenreName;
  // Jeigu zanro ID sutampa su pasirinkto zanro ID kuri paduotu kaip int duok pavadinima jeigu ne tai rodyk visi filmai
  if (genres.find((genre) => genre.id === parseInt(selectedGenre))) {
    selectedGenreName = genres.find((genre) => genre.id === parseInt(selectedGenre)).name;
  } else {
    selectedGenreName = 'Visi filmai';
  }

  return (
    <div>
      <h1>Populiariausių Filmų Paieška</h1>
      {/* Paduodu info search komponentui */}
      <Search searchTerm={searchTerm} handleSearch={handleSearch} genres={genres} handleGenreSelect={handleGenreSelect} />
      <h1>{selectedGenreName}</h1>
      {/* Paduodu info movies komp */}
      <Movies selectedGenre={selectedGenre} movies={movies} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default MovieSearch;
