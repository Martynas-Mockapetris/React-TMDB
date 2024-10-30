import Movie from './Movie';

// Pasiimu visus props
const MovieGrid = ({ movies, favorites, toggleFavorite, selectedGenre }) => {
  return (
    // Duodu zanro id kaip id kad galeciau stilizuot konkretu zanra
    <div id={selectedGenre} className="movies-grid">
      {/* Einu per visus istrauktus filmus ir dedu i movie komp*/}
      {movies.map((movie) => (
        // Paduodu props movie komp
        <Movie key={movie.id} movie={movie} isFavorite={favorites.find((fav) => fav.id === movie.id)} onToggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
};

export default MovieGrid;
